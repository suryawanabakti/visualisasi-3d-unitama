<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AbsenController extends Controller
{
    public function index()
    {
        $waktuSekarang = Carbon::now();
        $absensi = Absensi::where('user_id', auth()->id())->whereDate("waktu_masuk", $waktuSekarang)->first();
        return inertia("Absen/Page", ["absensi" => $absensi]);
    }

    protected function distance($lat1, $lon1, $lat2, $lon2, $unit)
    {
        if (($lat1 == $lat2) && ($lon1 == $lon2)) {
            return 0;
        } else {
            $theta = $lon1 - $lon2;
            $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
            $dist = acos($dist);
            $dist = rad2deg($dist);
            $miles = $dist * 60 * 1.1515;
            $unit = strtoupper($unit);

            if ($unit == "K") {
                return ($miles * 1.609344);
            } else if ($unit == "N") {
                return ($miles * 0.8684);
            } else {
                return $miles;
            }
        }
    }
    public function store(Request $request)
    {
        $jarak = $this->distance($request->latitude, $request->longitude, -5.141895, 119.484914, "K") * 1000;

        if (100 < $jarak) {
            return back()->with("message", "Gagal absen 🥲, Jarak :  " . round($jarak) . " meter.");
        }
        $waktuSekarang = Carbon::now();
        $absensi = Absensi::where('user_id', auth()->id())->whereDate("waktu_masuk", $waktuSekarang)->first();
        if (empty($absensi)) {
            Absensi::create([
                "user_id" => auth()->id(),
                "latitude_masuk" => $request->latitude,
                "longitude_masuk" => $request->longitude,
                "waktu_masuk" => Carbon::now()
            ]);
            return back()->with("message", "Berhasil absen masuk ");
        } else {
            $absensi->update([
                "latitude_pulang" => $request->latitude,
                "longitude_pulang" => $request->longitude,
                "waktu_pulang" => Carbon::now()
            ]);
            return back()->with("message", "Berhasil absen pulang ");
        }
    }
}
