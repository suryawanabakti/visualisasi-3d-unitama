<?php

use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/login');
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $users = User::role('user');
    if (auth()->user()->hasRole(['admin'])) {
        return Inertia::render('Dashboard', [
            "users" => [
                "countGenderMale" => $users->where('gender', 'male')->count(),
                "countGenderFemale" => User::where('gender', 'female')->count(),
                "count" => $users->count(),
                "countFromLastYear" => $users->whereYear('created_at', now()->format('Y'))->count(),
            ]
        ]);
    } else {
        return redirect()->route("absen.index");
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::controller(\App\Http\Controllers\AbsenController::class)->group(function () {
        Route::get('/absen', 'index')->name('absen.index');
        Route::post('/absen', 'store')->name('absen.store');
    });
    Route::controller(\App\Http\Controllers\VisualisasiController::class)->group(function () {
        Route::get('/visualisasi/kampus', 'kampus')->name('visualisasi.kampus');
        Route::get('/visualisasi/aula', 'aula')->name('visualisasi.aula');
        Route::get('/visualisasi/lt1', 'lt1')->name('visualisasi.lt1');
        Route::get('/visualisasi/lt2', 'lt2')->name('visualisasi.lt2');
        Route::get('/visualisasi/lt3', 'lt3')->name('visualisasi.lt3');
        Route::get('/visualisasi/musholla', 'musholla')->name('visualisasi.musholla');
        Route::get('/visualisasi/sekret2', 'sekret2')->name('visualisasi.sekret2');
    });
    Route::middleware(['role:admin|super'])->group(function () {
        Route::controller(\App\Http\Controllers\Admin\UserController::class)->group(function () {
            Route::get('/admin/users', 'index')->name('admin.users.index');
            Route::get('/admin/users/create', 'create')->name('admin.users.create');
            Route::post('/admin/users', 'store')->name('admin.users.store');
            Route::get('/admin/users/{user}/edit', 'edit')->name('admin.users.edit');
            Route::post('/admin/users/{user}', 'update')->name('admin.users.update');
            Route::delete('/admin/users/{user}', 'destroy')->name('admin.users.destroy');
        });

        Route::controller(\App\Http\Controllers\ReportController::class)->group(function () {
            Route::get("/admin/laporan", 'index')->name('admin.reports.index');
        });
    });

    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.index');
    Route::get('/activities', [NotificationController::class, 'index'])->name('activities.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
