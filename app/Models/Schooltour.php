<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class Schooltour extends Model
{
    protected $table = 'schooltour';

    protected $fillable = [
        'title',
        'description',
        'cover_image',
        'panorama_image',
    ];

    protected static function booted(): void
    {
        static::saving(function (Schooltour $record) {
            $disk = Storage::disk('public');
            $manager = new ImageManager(new Driver());

            // Handle cover_image
            if ($record->cover_image && $record->isDirty('cover_image')) {
                $oldImage = $record->getOriginal('cover_image');
                if ($oldImage && $disk->exists($oldImage)) {
                    $disk->delete($oldImage);
                }

                $originalPath = $record->cover_image;

                if ($disk->exists($originalPath)) {
                    try {
                        $image = $manager->read($disk->path($originalPath));

                        $image->scaleDown(width: 1080);

                        $pathInfo = pathinfo($originalPath);
                        $newFilename = $pathInfo['filename'] . '.webp';
                        $newPath = $pathInfo['dirname'] . '/' . $newFilename;

                        $encoded = $image->toWebp(quality: 80);

                        $disk->put($newPath, (string) $encoded);

                        $record->cover_image = $newPath;

                        if ($originalPath !== $newPath) {
                            $disk->delete($originalPath);
                        }
                    } catch (\Exception $e) {
                        \Log::error('Cover image conversion failed: ' . $e->getMessage());
                    }
                }
            }

            // Handle panorama_image (convert to webp only, no scale down, no quality reduction)
            if ($record->panorama_image && $record->isDirty('panorama_image')) {
                $oldImage = $record->getOriginal('panorama_image');
                if ($oldImage && $disk->exists($oldImage)) {
                    $disk->delete($oldImage);
                }

                $originalPath = $record->panorama_image;

                if ($disk->exists($originalPath)) {
                    try {
                        $image = $manager->read($disk->path($originalPath));

                        $pathInfo = pathinfo($originalPath);
                        $newFilename = $pathInfo['filename'] . '.webp';
                        $newPath = $pathInfo['dirname'] . '/' . $newFilename;

                        $encoded = $image->toWebp(quality: 100);

                        $disk->put($newPath, (string) $encoded);

                        $record->panorama_image = $newPath;

                        if ($originalPath !== $newPath) {
                            $disk->delete($originalPath);
                        }
                    } catch (\Exception $e) {
                        \Log::error('Panorama image conversion failed: ' . $e->getMessage());
                    }
                }
            }
        });

        static::deleting(function (Schooltour $record) {
            $disk = Storage::disk('public');

            if ($record->cover_image) {
                $disk->delete($record->cover_image);
            }

            if ($record->panorama_image) {
                $disk->delete($record->panorama_image);
            }
        });
    }

    public function getCoverImageUrlAttribute(): ?string
    {
        return $this->cover_image
            ? asset('storage/' . $this->cover_image)
            : null;
    }

    public function getPanoramaImageUrlAttribute(): ?string
    {
        return $this->panorama_image
            ? asset('storage/' . $this->panorama_image)
            : null;
    }
}
