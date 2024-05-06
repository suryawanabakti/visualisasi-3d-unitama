<?php

use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $users = User::role('user');

    return Inertia::render('Dashboard', [
        "users" => [
            "countGenderMale" => $users->where('gender', 'male')->count(),
            "countGenderFemale" => User::where('gender', 'female')->count(),
            "count" => $users->count(),
            "countFromLastYear" => $users->whereYear('created_at', now()->format('Y'))->count(),
        ]
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::middleware(['role:admin|super'])->group(function () {
        Route::controller(\App\Http\Controllers\Admin\UserController::class)->group(function () {
            Route::get('/admin/users', 'index')->name('admin.users.index');
            Route::get('/admin/users/create', 'create')->name('admin.users.create');
            Route::post('/admin/users', 'store')->name('admin.users.store');
            Route::get('/admin/users/{user}/edit', 'edit')->name('admin.users.edit');
            Route::post('/admin/users/{user}', 'update')->name('admin.users.update');
            Route::delete('/admin/users/{user}', 'destroy')->name('admin.users.destroy');
        });
    });

    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.index');
    Route::get('/activities', [NotificationController::class, 'index'])->name('activities.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
