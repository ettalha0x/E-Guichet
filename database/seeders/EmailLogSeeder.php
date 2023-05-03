<?php

namespace Database\Seeders;

use App\Models\EmailLog;
use Illuminate\Database\Seeder;

class EmailLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EmailLog::factory()->count(5)->create();
    }
}
