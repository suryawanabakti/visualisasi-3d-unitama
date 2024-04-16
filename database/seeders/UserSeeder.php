<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::factory(100)->create()->map(fn ($user) => $user->assignRole("user"));

        \App\Models\User::create(["name" => "Admin", "email" => "admin@admin", "password" => bcrypt("qwerty123")])->assignRole("admin");
    }
}
