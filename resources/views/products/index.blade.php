@extends('layout.default')

@section('title', 'Products')

@section('content')
    <div class="content">
        <h1>Products</h1>
        <div class="row">
            <div class="col-lg-12">
                <a class="btn btn-sm btn-success pull-right" href="{{ route('products.create') }}"><span class="fa fa-plus"></span></a>
                <br><br>
            </div>
        </div>
        <table class="table table-condensed table-striped table-bordered">
            <thead>
            <tr>
                <td class="col-sm-1 text-center">ID</td>
                <td class="col-sm-3">Name</td>
                <td class="col-sm-5">Description</td>
                <td class="col-sm-1 text-center">Price</td>
                <td class="col-sm-1 text-center">Featured</td>
                <td class="col-sm-1 text-center">Recomend</td>
                <td class="col-sm-1 text-center">Actions</td>
            </tr>
            </thead>
            <tbody>
            @foreach($products as $key => $product)
                <tr>
                    <td class="vert-align text-center">{{ $product->id }}</td>
                    <td class="vert-align">{{ $product->name }}</td>
                    <td class="vert-align text-justify">{{ $product->description }}</td>
                    <td class="vert-align text-center">{{ $product->price }}</td>
                    <td class="vert-align text-center">{!! ($product->featured) ? '<span class="glyphicon glyphicon-ok icon-ok"></span>' : '<span class="glyphicon glyphicon-remove icon-no"></span>' !!}</td>
                    <td class="vert-align text-center">{!! ($product->recommend) ? '<span class="glyphicon glyphicon-ok icon-ok"></span>' : '<span class="glyphicon glyphicon-remove icon-no"></span>' !!}</td>
                    <td class="vert-align text-center">
                        <a class="btn btn-sm btn-info" href="{{ route('products.edit', ['id' => $product->id]) }}"><span class="fa fa-pencil"></span></a>
                        <a class="btn btn-sm btn-danger" href="{{ route('products.delete', ['id' => $product->id]) }}"><span class="fa fa-remove"></span></a>
                    </td>
                </tr>
            @endforeach
            </tbody>
            </tbody>
        </table>
    </div>
@endsection