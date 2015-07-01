@extends('store.store')

@section('categories')
    @include('store.categories')
@stop

@section('content')
    <div class="col-sm-9 padding-right">
        <div class="features_items">
            <h2 class="title text-center">Produtos de <b>{{ $products->first()->category->name }}</b></h2>
            @include('store.products', ['products' => $products])
        </div>
    </div>
@stop