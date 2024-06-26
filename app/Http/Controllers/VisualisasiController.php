<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VisualisasiController extends Controller
{
    public function kampus()
    {
        return inertia("Visualisasi/Kampus");
    }
    public function aula()
    {
        return inertia("Visualisasi/Aula");
    }
    public function lt1()
    {
        return inertia("Visualisasi/Lt1");
    }
    public function lt2()
    {
        return inertia("Visualisasi/Lt2");
    }
    public function lt3()
    {
        return inertia("Visualisasi/Lt3");
    }
    public function musholla()
    {
        return inertia("Visualisasi/Musholla");
    }
    public function sekret2()
    {
        return inertia("Visualisasi/Sekret2");
    }
}
