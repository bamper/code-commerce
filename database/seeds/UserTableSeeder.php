<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        factory('CodeCommerce\User')->create([
            'name' => 'Arcostasi',
            'email' => 'arcostasi@gmail.com',
            'password' => Hash::make('123456'),
            'remember_token' => str_random(10)
        ]);

        factory('CodeCommerce\User', 9)->create();
    }
}
