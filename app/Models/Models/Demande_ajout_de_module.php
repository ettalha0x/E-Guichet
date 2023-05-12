<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DemandeAjoutDeModule extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nom_tudiant',
        'prenom_tudiant',
        'cne_tudiant',
        'cni_tudiant',
        'appoge',
        'semestre',
        'module',
        'type_email',
    ];
}
