<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(CodeCommerce\User::class, function ($faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => Hash::make(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(CodeCommerce\Category::class, function ($faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->sentence
    ];
});

$factory->define(CodeCommerce\Product::class, function ($faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(1),
        'price' => $faker->numberBetween(100, 2000),
        'featured' => $faker->boolean,
        'recommended' => $faker->boolean,
        'category_id' => $faker->numberBetween(1, 15)
    ];
});