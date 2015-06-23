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

Route::get('/', 'IndexController@index');

Route::group(['prefix' => 'admin'], function () {

    // CRUD Categories
    Route::group(['prefix' => 'categories'], function () {

        // List
        Route::get('/', ['as' => 'categories', 'uses' => 'AdminCategoriesController@index']);

        // Create
        Route::get('create', ['as' => 'categories.create', 'uses' => 'AdminCategoriesController@create']);

        Route::post('insert', ['as' => 'categories.insert', 'uses' => 'AdminCategoriesController@insert']);

        // Update
        Route::get('edit/{id}', [
            'as' => 'categories.edit',
            'uses' => 'AdminCategoriesController@edit'
        ])->where('id', '[0-9]+');

        Route::put('update/{id}', [
            'as' => 'categories.update',
            'uses' => 'AdminCategoriesController@update'
        ])->where('id', '[0-9]+');

        // Delete
        Route::get('delete/{id}', [
            'as' => 'categories.delete',
            'uses' => 'AdminCategoriesController@delete'
        ])->where('id', '[0-9]+');

    });

    // CRUD Products
    Route::group(['prefix' => 'products'], function () {

        // Outra forma de validar os parâmetros em comum
        Route::pattern('id', '[0-9]+');

        // List
        Route::get('/', ['as' => 'products', 'uses' => 'AdminProductsController@index']);

        // Create
        Route::get('create', ['as' => 'products.create', 'uses' => 'AdminProductsController@create']);
        Route::post('insert', ['as' => 'products.insert', 'uses' => 'AdminProductsController@insert']);

        // Update
        Route::get('edit/{id}', ['as' => 'products.edit', 'uses' => 'AdminProductsController@edit']);
        Route::put('update/{id}', ['as' => 'products.update', 'uses' => 'AdminProductsController@update']);

        // Delete
        Route::get('delete/{id}', ['as' => 'products.delete', 'uses' => 'AdminProductsController@delete']);

    });

});
