<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class HashPasswords extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'passwords:hash';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Hash passwords for all users';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users = user::all();
        $bar = $this->output->createProgressBar(count($users));
        foreach ($users as $user){
            $user->password = Hash::make($user->password);
            $user->save();
            $bar->advance();
        }
        $bar->finish();
        $this->info('Password Hasged successfully');
    }
}
