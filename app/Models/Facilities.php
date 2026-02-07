<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class Facilities extends Model
{
    protected $table = 'facilities';

    protected $fillable = [
        'name',
        'description',
        'image',
    ];

    protected $casts = [
        'image' => 'array',
    ];

    protected static function booted(): void
    {
        static::saving(function (Facilities $record) {
            if ($record->image && $record->isDirty('image')) {
                $disk = Storage::disk('public');
                $convertedImages = [];

                foreach ((array) $record->image as $imagePath) {
                    if ($disk->exists($imagePath)) {
                        try {
                            if (str_ends_with($imagePath, '.webp')) {
                                $convertedImages[] = $imagePath;
                                continue;
                            }

                            $manager = new ImageManager(new Driver());
                            $image = $manager->read($disk->path($imagePath));

                            $image->scaleDown(width: 1200);

                            $pathInfo = pathinfo($imagePath);
                            $newFilename = $pathInfo['filename'] . '.webp';
                            $newPath = $pathInfo['dirname'] . '/' . $newFilename;

                            $encoded = $image->toWebp(quality: 80);
                            $disk->put($newPath, (string) $encoded);

                            $convertedImages[] = $newPath;

                            if ($imagePath !== $newPath) {
                                $disk->delete($imagePath);
                            }
                        } catch (\Exception $e) {
                            \Log::error('Image conversion failed: ' . $e->getMessage());
                            $convertedImages[] = $imagePath;
                        }
                    }
                }

                $record->image = $convertedImages;
            }
        });

        static::deleting(function (Facilities $record) {
            if ($record->image && is_array($record->image)) {
                foreach ($record->image as $imagePath) {
                    Storage::disk('public')->delete($imagePath);
                }
            }
        });

        static::updating(function (Facilities $record) {
            if ($record->isDirty('image')) {
                $oldImages = $record->getOriginal('image');
                $newImages = $record->image ?? [];

                if ($oldImages && is_array($oldImages)) {
                    $deletedImages = array_diff($oldImages, $newImages);
                    foreach ($deletedImages as $imagePath) {
                        Storage::disk('public')->delete($imagePath);
                    }
                }
            }
        });
    }

    public function getImageUrlsAttribute(): array
    {
        if (!$this->image || !is_array($this->image)) {
            return [];
        }

        return array_map(function ($path) {
            return asset('storage/' . $path);
        }, $this->image);
    }

    public function getFirstImageUrlAttribute(): ?string
    {
        if (!$this->image || !is_array($this->image) || empty($this->image)) {
            return null;
        }

        return asset('storage/' . $this->image[0]);
    }
}
