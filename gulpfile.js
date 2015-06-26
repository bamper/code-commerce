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
    mix.copy(bowerDir + 'bootstrap/fonts', 'public/fonts');
    mix.copy(bowerDir + 'font-awesome/fonts', 'public/fonts');
    mix.copy(bowerDir + 'jquery/dist/jquery.min.js', 'public/js/jquery.min.js');
    mix.copy(bowerDir + 'bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');
    mix.less('app.less');
});