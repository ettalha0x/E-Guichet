<?php

namespace Database\Seeders;

use App\Models\DemandeAjoutDeModule;
use Illuminate\Database\Seeder;

class DemandeAjoutDeModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DemandeAjoutDeModule::factory()->count(5)->create();
    }
}
