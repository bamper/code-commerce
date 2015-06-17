<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>
    <link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
    <style>
        html, body {
            height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100%;
            color: #3e3e3e;
            display: table;
            font-weight: 100;
            font-family: 'Lato';
        }

        ul {
            list-style-type: square;
        }

        ul > li {
            color: #337ab7;
        }

        .container {
            text-align: left;
            display: table-cell;
            vertical-align: top;
        }

        .content {
            margin: 25px 50px 25px 50px;
            text-align: left;
            display: inline-block;
        }

        .list {
            font-size: 19px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="content">
        <h1>Categories</h1>
        <ul class="list">
            @foreach($categories as $category)
                <li>{{ $category->name }}</li>
            @endforeach
        </ul>
    </div>
</div>
</body>
</html>