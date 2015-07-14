@extends('store.store')

@section('content')
    <div class="col-md-12">
        <h3>Meus Pedidos</h3>

        <table class="table table-responsivet">
            <tbody>
            <tr>
                <th class="text-center"># Pedido</th>
                <th>Qtde / Descrição do Item</th>
                <th class="text-right">Valor Total</th>
                <th class="text-center">Status</th>
            </tr>
            @foreach($orders as $order)
                <tr>
                    <td  class="text-center" style="vertical-align: middle;">{{ $order->id }}</td>
                    <td>
                        @foreach($order->items as $item)
                            {{ $item->qty }}
                            <span class="fa fa-cart-plus"></span>&nbsp;
                            <a href="{{ route('store.product', ['id' => $item->product->id]) }}">{{ $item->product->name }}</a>
                            <br>
                        @endforeach
                    </td>
                    <td class="text-right" style="vertical-align: middle;">R$ {{ number_format($order->total, 2, ',', '.') }}</td>
                    <td class="text-center">{{ $order->status }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <div>&nbsp;</div>
    </div>
@stop
