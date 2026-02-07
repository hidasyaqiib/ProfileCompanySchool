<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class Teacher extends Model
{
    protected $fillable = [
        'name',
        'position',
        'photo',
        'type',
    ];

    protected $casts = [
        'type' => 'string',
    ];

    protected static function booted(): void
    {
        static::saving(function (Teacher $record) {
            if ($record->photo && $record->isDirty('photo')) {
                $disk = Storage::disk('public');

                $oldImage = $record->getOriginal('photo');
                if ($oldImage && $disk->exists($oldImage)) {
                    $disk->delete($oldImage);
                }

                $originalPath = $record->photo;

                if ($disk->exists($originalPath)) {
                    try {
                        $manager = new ImageManager(new Driver());

                        $image = $manager->read($disk->path($originalPath));

                        $image->scaleDown(width: 1080);

                        $pathInfo = pathinfo($originalPath);
                        $newFilename = $pathInfo['filename'] . '.webp';
                        $newPath = $pathInfo['dirname'] . '/' . $newFilename;

                        $encoded = $image->toWebp(quality: 80);

                        $disk->put($newPath, (string) $encoded);

                        $record->photo = $newPath;

                        if ($originalPath !== $newPath) {
                            $disk->delete($originalPath);
                        }
                    } catch (\Exception $e) {
                        \Log::error('Image conversion failed: ' . $e->getMessage());
                    }
                }
            }
        });

        static::deleting(function (Teacher $record) {
            if ($record->photo) {
                Storage::disk('public')->delete($record->photo);
            }
        });
    }
    public function getImageUrlAttribute(): ?string
    {
        return $this->photo
        ? asset('storage/' . $this->photo)
        : null;
    }
}
