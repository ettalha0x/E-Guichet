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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();;
            $table->string('prenom')->nullable();;
            $table->string('cne')->nullable();;
            $table->string('cni')->nullable();;
            $table->string('email')->unique();
            $table->boolean('is_admin')->default('0');
            $table->string('Appoge')->unique()->nullable();
            $table->string('role')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('fillier')->nullable();
            $table->string('semester')->nullable();
            $table->string('telephone')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
