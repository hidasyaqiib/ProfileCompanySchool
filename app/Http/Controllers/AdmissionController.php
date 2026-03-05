<?php

namespace App\Http\Controllers;

use App\Models\Admission;
use Illuminate\Http\Request;

class AdmissionController extends Controller
{
    public function admission()
    {
        $admission = Admission::latest()->first();

        return inertia('public/admission/admission', [
            'admission' => $admission,
        ]);
    }
}
