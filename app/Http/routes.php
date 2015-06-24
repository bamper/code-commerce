<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', ['as' => 'home', 'uses' => 'IndexController@index']);

Route::group(['prefix' => 'admin'], function () {

    // CRUD Categories
    Route::group(['prefix' => 'categories'], function () {

        // List
        Route::get('/', ['as' => 'categories', 'uses' => 'Admin\CategoriesController@index']);

        // Create
        Route::get('create', ['as' => 'categories.create', 'uses' => 'Admin\CategoriesController@create']);

        Route::post('insert', ['as' => 'categories.insert', 'uses' => 'Admin\CategoriesController@insert']);

        // Update
        Route::get('edit/{id}', [
            'as' => 'categories.edit',
            'uses' => 'Admin\CategoriesController@edit'
        ])->where('id', '[0-9]+');

        Route::put('update/{id}', [
            'as' => 'categories.update',
            'uses' => 'Admin\CategoriesController@update'
        ])->where('id', '[0-9]+');

        // Delete
        Route::get('delete/{id}', [
            'as' => 'categories.delete',
            'uses' => 'Admin\CategoriesController@delete'
        ])->where('id', '[0-9]+');

    });

    // CRUD Products
    Route::group(['prefix' => 'products'], function () {

        // Outra forma de validar os parâmetros em comum
        Route::pattern('id', '[0-9]+');

        // List
        Route::get('/', ['as' => 'products', 'uses' => 'Admin\ProductsController@index']);

        // Create
        Route::get('create', ['as' => 'products.create', 'uses' => 'Admin\ProductsController@create']);
        Route::post('insert', ['as' => 'products.insert', 'uses' => 'Admin\ProductsController@insert']);

        // Update
        Route::get('edit/{id}', ['as' => 'products.edit', 'uses' => 'Admin\ProductsController@edit']);
        Route::put('update/{id}', ['as' => 'products.update', 'uses' => 'Admin\ProductsController@update']);

        // Delete
        Route::get('delete/{id}', ['as' => 'products.delete', 'uses' => 'Admin\ProductsController@delete']);

    });

});
