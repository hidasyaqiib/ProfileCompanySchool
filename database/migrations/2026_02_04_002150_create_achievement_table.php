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
        Schema::create('achievement', function (Blueprint $table) {
            $table->id();
            $table->string('title_achievement');
            $table->json('name_student');
            $table->text('description')->nullable();
            $table->date('date_achievement');
            $table->enum('level_achievement', ['District', 'Provincial', 'National', 'International']);
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achievement');
    }
};
