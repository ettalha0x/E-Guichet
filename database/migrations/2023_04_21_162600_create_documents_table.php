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
        Schema::create('documents', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name');
            $table->string('prenom');
            $table->unsignedInteger('cne');
            $table->unsignedInteger('cni');
            $table->string('appoge');
            $table->boolean('scolarite')->default(0);
            $table->boolean('relevedenote')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
