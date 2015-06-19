@extends('layout')

@section('title', 'Categories')

@section('content')
    <div class="content content-left">
        <h1>Categories</h1>
        <ul class="list color-blue">
            @foreach($categories as $category)
                <li>{{ $category->name }}</li>
            @endforeach
        </ul>
    </div>
@stop