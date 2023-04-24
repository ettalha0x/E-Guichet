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
        Schema::create('email_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome_tudiant');
            $table->string('prenom_tudiant');
            $table->string('cne_tudiant');
            $table->string('cni_tudiant');
            $table->string('appoge');
            $table->enum('type_email', ["Demande de correction de note","Demande de correction de donnees","Demande ajout de module"]);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('email_logs');
    }
};
