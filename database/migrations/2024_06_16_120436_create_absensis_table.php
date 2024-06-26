<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('absensi', function (Blueprint $table) {
            $table->id();
            $table->uuid('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->string('latitude_masuk');
            $table->string('longitude_masuk');
            $table->timestamp('waktu_masuk');
            $table->string('latitude_pulang')->nullable();
            $table->string('longitude_pulang')->nullable();
            $table->timestamp('waktu_pulang')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('absensis');
    }
};
