<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class News extends Model
{
    protected $fillable = [
        'title',
        'content',
        'thumbnail',
        'published_at',
        'author',
        'slug',
        'status',
    ];

    protected $appends = ['image_url'];

    protected static function booted(): void
    {
        static::saving(function (News $record) {
            if ($record->thumbnail && $record->isDirty('thumbnail')) {
                $disk = Storage::disk('public');

                $originalThumbnail = $record->getOriginal('thumbnail');
                if ($originalThumbnail && $disk->exists($originalThumbnail)) {
                    $disk->delete($originalThumbnail);
                }

                $originalPath = $record->thumbnail;

                if ($disk->exists($originalPath)) {
                    try {
                        $manager = new ImageManager(new Driver);

                        $image = $manager->read($disk->path($originalPath));

                        $image->scaleDown(width: 1080);

                        $pathInfo = pathinfo($originalPath);
                        $newFilename = $pathInfo['filename'].'.webp';
                        $newPath = $pathInfo['dirname'].'/'.$newFilename;

                        $encoded = $image->toWebp(quality: 80);

                        $disk->put($newPath, (string) $encoded);

                        $record->thumbnail = $newPath;

                        if ($originalPath !== $newPath) {
                            $disk->delete($originalPath);
                        }
                    } catch (\Exception $e) {
                        \Log::error('Image conversion failed: '.$e->getMessage());
                    }
                }
            }
        });

        static::deleting(function (News $record) {
            if ($record->thumbnail) {
                Storage::disk('public')->delete($record->thumbnail);
            }
        });
    }

    public function getImageUrlAttribute(): ?string
    {
        return $this->thumbnail
        ? asset('storage/'.$this->thumbnail)
        : null;
    }
}
