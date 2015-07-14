@extends('store.store')

@section('content')
    <div class="col-md-6">
        @if (isset($cart) && $cart == 'empty')
            <h3><span class="fa fa-shopping-cart"></span> Carrinho</h3>
            <div class="alert alert-danger" role="alert">
                <span class="fa fa-remove"></span> Carrinho de compra vazio.
            </div>
        @else
            <h3>Pedido realizado com sucesso!</h3>
            <div class="alert alert-success" role="alert">
                <span class="fa fa-check-circle"></span> O pedido #{{ $order->id }}, foi realizado com sucesso.<br>
                <span class="fa fa-user"></span> <a href="{{ route('account.orders') }}">Clique aqui</a> para visualizar seus pedidos.
            </div>

        @endif
    </div>
@stop

