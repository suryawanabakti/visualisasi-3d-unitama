<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function index()
    {
        $absensi = Absensi::with('user')->orderBy('created_at', 'desc')->paginate(10);
        return inertia("Admin/Reports/Page", ["absensi" => $absensi]);
    }
}
