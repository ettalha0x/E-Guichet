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
        Schema::create('demande_de_corrections', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom_etudiant');
            $table->string('prenom_etudiant');
            $table->string('cne_etudiant');
            $table->string('cni_etudiant');
            $table->string('appoge');
            $table->string('semestre');
            $table->string('module');
            $table->enum('type_email', ["Demande de correction de note"]);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_de_corrections');
    }
};
