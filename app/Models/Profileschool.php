<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profileschool extends Model
{
    protected $table = 'profileschool';

    protected $fillable = [
        'name',
        'content',
        'address',
    ];
}
