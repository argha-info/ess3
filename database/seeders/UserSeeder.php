<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'userid' => 'user-124',
            'user_type' => 1,
            'role_id' => 1,
            'name' => 'Admin',
            'email' => 'admin1@gmail.com',
            'password' => Hash::make('admin@123'),
        ]);
    }
}
