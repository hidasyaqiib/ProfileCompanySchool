<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class Achievement extends Model
{
    protected $table = 'achievement';

    protected $fillable = [
        'title_achievement',
        'name_student',
        'description',
        'date_achievement',
        'level_achievement',
        'image',
    ];

    protected $casts = [
        'name_student' => 'array',
        'date_achievement' => 'date',
    ];

    protected $appends = ['image_url'];

    protected static function booted(): void
    {
        static::saving(function (Achievement $record) {
            if ($record->image && $record->isDirty('image')) {
                $disk = Storage::disk('public');

                $oldImage = $record->getOriginal('image');
                if ($oldImage && $disk->exists($oldImage)) {
                    $disk->delete($oldImage);
                }

                $originalPath = $record->image;

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

        static::deleting(function (Achievement $record) {
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
