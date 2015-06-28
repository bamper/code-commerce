<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="author" content="Anderson Costa">

    <title>Laravel</title>

    <link href='{{ asset('/css/app.css') }}' rel='stylesheet' type='text/css'>
    <link href='{{ asset('/css/app-custom.css') }}' rel='stylesheet' type='text/css'>
</head>
<body>

<nav class="navbar navbar-default navbar-fixed-top">
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
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    @yield('content')
</div>

<script src="{{ asset('/js/jquery.min.js') }}"></script>
<script src="{{ asset('/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('/js/custom.js') }}"></script>

</body>
</html>