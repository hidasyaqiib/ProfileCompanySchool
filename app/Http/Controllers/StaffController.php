<?php

namespace App\Http\Controllers;
use App\Models\Structure;
use App\Models\Teacher;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    public function structure()
    {
        $structures = Structure::latest()->get();

        return inertia('public/staff/structure', [
            'structures' => $structures
        ]);
    }

    public function teacher()
    {
        $chiefs = Teacher::where('type', 'Chief')->get();
        $staffs = Teacher::where('type', 'Staff')->get();
        $teachers = Teacher::where('type', 'Teacher')->get();

        return inertia('public/staff/teacher', [
            'chiefs' => $chiefs,
            'staffs' => $staffs,
            'teachers' => $teachers,
        ]);
    }
}
