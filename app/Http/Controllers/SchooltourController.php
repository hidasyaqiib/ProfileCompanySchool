<?php

namespace App\Http\Controllers;

use App\Models\Schooltour;

class SchooltourController extends Controller
{
    public function schooltour()
    {
        $schooltours = Schooltour::all()->map(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'description' => $item->description,
                'cover_image' => asset('storage/'.$item->cover_image),
                'panorama_image' => asset('storage/'.$item->panorama_image),
            ];
        });

        return inertia('public/schooltour/schooltour', [
            'schooltours' => $schooltours,
        ]);
    }
}
