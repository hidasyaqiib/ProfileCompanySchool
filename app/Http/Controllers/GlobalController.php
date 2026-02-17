<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GlobalController extends Controller
{
    public function home()
    {
        return inertia('public/home/home');
    }

    public function profile()
    {
        return inertia('public/about/profile');
    }
}
