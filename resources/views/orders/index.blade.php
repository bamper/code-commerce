@extends('layout.default')

@section('title', 'Orders')

@section('content')
    <div class="content">
        <h1>Orders</h1>

        <div class="row">
            <div class="col-lg-12">
                <a class="btn btn-sm btn-success pull-right" href=""><span
                            class="fa fa-plus"></span></a>
                <br><br>
            </div>
        </div>
        <table class="table table-condensed table-striped table-bordered">
            <thead>
            <tr>
                <td class="col-sm-1 text-center"># Order</td>
                <td class="col-sm-3">E-mail user</td>
                <td class="col-sm-4">Qty / Item description</td>
                <td class="col-sm-2 text-center">Total</td>
                <td class="col-sm-2 text-center">Status</td>
                <td class="col-sm-1 text-center">Actions</td>
            </tr>
            <thead>
            <tbody>
            @foreach($orders as $order)
                <tr>
                    <td class="vert-align text-center">{{ $order->id }}</td>
                    <td class="vert-align">{{ $order->user->email }}</td>
                    <td class="vert-align">
                        @foreach($order->items as $key => $item)
                            {{ $item->qty }}
                            <span class="fa fa-cart-plus"></span>&nbsp;
                            <a href="{{ route('store.product', ['id' => $item->product->id]) }}">{{ $item->product->name }}</a>
                            <br>
                        @endforeach
                    </td>
                    <td class="vert-align text-right" style="vertical-align: middle;">R$ {{ number_format($order->total, 2, ',', '.') }}</td>
                    <td class="vert-align text-center">{{ $order->status() }}</td>
                    <td class="vert-align text-center">
                        <a class="btn btn-sm btn-info" href="{{ route('products.edit', ['id' => $order->id]) }}"><span
                                    class="fa fa-pencil"></span></a>
                    </td>
                </tr>
            @endforeach
            </tbody>
            <tfoot class="hide-if-no-paging">
            <tr>
                <td colspan="6" class="text-center">
                    <ul class="pagination pagination-centered">
                        {!! $orders->render() !!}
                    </ul>
                </td>
            </tr>
            </tfoot>
        </table>
        <div>&nbsp;</div>
    </div>
@stop