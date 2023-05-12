<?php

namespace Database\Seeders;

use App\Models\DemandeDeCorrection;
use Illuminate\Database\Seeder;

class DemandeDeCorrectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DemandeDeCorrection::factory()->count(5)->create();
    }
}
