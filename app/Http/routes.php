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

Route::get('/', ['as' => 'home', 'uses' => 'StoreController@index']);
Route::get('/{id}', ['as' => 'store.bycategory', 'uses' => 'StoreController@productCategory']);

Route::group(['prefix' => 'admin', 'where' => ['id' => '[0-9]+']], function () {

    // CRUD Categories
    Route::group(['prefix' => 'categories'], function () {

        // List
        Route::get('/', ['as' => 'categories', 'uses' => 'Admin\CategoriesController@index']);

        // Create
        Route::get('create', ['as' => 'categories.create', 'uses' => 'Admin\CategoriesController@create']);
        Route::post('store', ['as' => 'categories.store', 'uses' => 'Admin\CategoriesController@store']);

        // Update
        Route::get('edit/{id}', ['as' => 'categories.edit', 'uses' => 'Admin\CategoriesController@edit']);
        Route::put('update/{id}', ['as' => 'categories.update', 'uses' => 'Admin\CategoriesController@update']);

        // Delete
        Route::get('destroy/{id}', ['as' => 'categories.destroy', 'uses' => 'Admin\CategoriesController@destroy']);

    });

    // CRUD Products
    Route::group(['prefix' => 'products'], function () {

        // List
        Route::get('/', ['as' => 'products', 'uses' => 'Admin\ProductsController@index']);

        // Create
        Route::get('create', ['as' => 'products.create', 'uses' => 'Admin\ProductsController@create']);
        Route::post('store', ['as' => 'products.store', 'uses' => 'Admin\ProductsController@store']);

        // Update
        Route::get('edit/{id}', ['as' => 'products.edit', 'uses' => 'Admin\ProductsController@edit']);
        Route::put('update/{id}', ['as' => 'products.update', 'uses' => 'Admin\ProductsController@update']);

        // Delete
        Route::get('destroy/{id}', ['as' => 'products.destroy', 'uses' => 'Admin\ProductsController@destroy']);

        Route::group(['prefix' => 'images'], function() {

            // Get a image by id
            Route::get('{id}/product', ['as' => 'products.images', 'uses' => 'Admin\ProductsController@images']);
            Route::get('create/{id}/product', ['as' => 'products.images.create', 'uses' => 'Admin\ProductsController@createImage']);
            Route::post('store/{id}/product', ['as' => 'products.images.store', 'uses' => 'Admin\ProductsController@storeImage']);
            Route::get('destroy/{id}/image', ['as' => 'products.images.destroy', 'uses' => 'Admin\ProductsController@destroyImage']);

        });

    });

});
