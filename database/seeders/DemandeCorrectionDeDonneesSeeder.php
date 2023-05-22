<?php

namespace Database\Seeders;

use App\Models\DemandeCorrectionDeDonnees;
use Illuminate\Database\Seeder;

class DemandeCorrectionDeDonneesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DemandeCorrectionDeDonnees::factory()->count(5)->create();
    }
}
