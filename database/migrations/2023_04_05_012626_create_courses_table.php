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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('Course', 400)->nullable();
            $table->string('Semester', 400)->nullable();
            $table->string('Module_1', 400)->nullable();
            $table->string('Module_2', 400)->nullable();
            $table->string('Module_3', 400)->nullable();
            $table->string('Module_4', 400)->nullable();
            $table->string('Module_5', 400)->nullable();
            $table->string('Module_6', 400)->nullable();
            $table->string('Module_7', 400)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
