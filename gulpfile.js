var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var bowerDir = 'vendor/bower_components/';

elixir(function (mix) {

    mix.styles([
        'bootstrap.min.css',
        'jquery.bootstrap-touchspin.min.css',
        'font-awesome.min.css',
        'prettyPhoto.css',
        'animate.css',
        'main.css',
        'responsive.css'
    ], 'public/css/app.css');

    mix.scripts([
        'jquery.min.js',
        'bootstrap.min.js',
        'jquery.bootstrap-touchspin.min.js',
        'jquery.scrollUp.min.js',
        'price-range.js',
        'jquery.prettyPhoto.js',
        'validator.js',
        'main.js'
    ], 'public/js/app.js');

    mix.version(['css/app.css', 'js/app.js']);
    mix.copy('resources/assets/fonts', 'public/build/fonts');

});