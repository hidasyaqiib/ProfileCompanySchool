<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class Gallery extends Model
{
    protected $table = 'gallery';

    protected $fillable = [
        'title',
        'image',
        'date',
    ];

    protected static function booted(): void
    {
        static::saving(function (Gallery $record) {
            if ($record->image && $record->isDirty('image')) {
                $disk = Storage::disk('public');

                $originalImage = $record->getOriginal('image');
                if ($originalImage && $disk->exists($originalImage)) {
                    $disk->delete($originalImage);
                }

                $originalPath = $record->image;

                if ($disk->exists($originalPath)) {
                    try {
                        $manager = new ImageManager(driver: new Driver);

                        $image = $manager->read($disk->path($originalPath));

                        $image->scaleDown(width: 1080);

                        $pathInfo = pathinfo($originalPath);
                        $newFilename = $pathInfo['filename'].'.webp';
                        $newPath = $pathInfo['dirname'].'/'.$newFilename;

                        $encoded = $image->toWebp(quality: 80);

                        $disk->put($newPath, (string) $encoded);

                        $record->image = $newPath;

                        if ($originalPath !== $newPath) {
                            $disk->delete($originalPath);
                        }
                    } catch (\Exception $e) {
                        \Log::error('Image conversion failed: '.$e->getMessage());
                    }
                }
            }
        });

        static::deleting(function (Gallery $record) {
            if ($record->image) {
                Storage::disk('public')->delete($record->image);
            }
        });
    }

    public function getImageUrlAttribute(): ?string
    {
        return $this->image
        ? asset('storage/'.$this->image)
        : null;
    }
}
