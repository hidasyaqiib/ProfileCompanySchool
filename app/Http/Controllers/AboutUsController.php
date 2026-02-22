<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutUsController extends Controller
{
    public function profile()
    {
        return inertia('public/about/profile');
    }
}
