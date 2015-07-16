<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="author" content="Anderson Costa">

    <title>Laravel</title>

    <link href="{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('/css/app-custom.css') }}" rel="stylesheet" type="text/css">
</head>
<body>

<nav class="navbar header-bottom navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
            </button>
            <a class="navbar-brand" href="{{ route('home') }}">CodeCommerce</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="{{ route('home') }}">Home</a></li>
                <li><a href="{{ route('categories') }}">Categories</a></li>
                <li><a href="{{ route('products') }}">Products</a></li>
                <li><a href="{{ route('orders') }}">Orders</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                @if (Auth::guest())
                    <li><a href="{{ url('/auth/login') }}"><i class="fa fa-lock"></i> Login</a></li>
                @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="{{ url('/auth/logout') }}"><i class="fa fa-close"></i> Logout</a></li>
                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    @yield('content')
</div>

<script src="{{ elixir('js/app.js') }}"></script>
<script src="{{ asset('/js/custom.js') }}"></script>

</body>
</html>