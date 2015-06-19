@extends('layout')

@section('title', 'Products')

@section('content')
    <div class="content content-left">
        <h1>Products</h1>
        <ul class="list color-blue">
            @foreach($products as $product)
                <li>{{ $product->name }}</li>
            @endforeach
        </ul>
    </div>
@stop