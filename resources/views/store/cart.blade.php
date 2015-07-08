@extends('store.store')

@section('content')
    <section id="cart_items">
        <div class="container">
            <div class="table-responsive cart_info">
                <table class="table table-condensed">
                    <thead>
                    <tr class="cart_menu">
                        <td class="image">Iten</td>
                        <td class="description">Descrição</td>
                        <td class="price">Valor</td>
                        <td class="qty text-center">Qtde</td>
                        <td class="total">Total</td>
                        <td>&nbsp;</td>
                    </tr>
                    </thead>
                    <tbody>
                    @forelse($cart->all() as $key => $item)
                        <tr>
                            <td class="cart_product">
                                <a href="{{ route('store.product', ['id' => $key]) }}">
                                    <img src=""
                                </a>
                            </td>
                            <td>
                                <h4><a href="{{ route('store.product', ['id' => $key]) }}">{{ $item['name'] }}</a></h4>

                                <p>Código: {{ $key }}</p>
                            </td>
                            <td class="cart_total_price">
                                R$ {{ $item['price'] }}
                            </td>
                            <td class="cart_total_price text-center">
                                <input type="text" class="form-control text-center number-input" onkeypress="validate(event)" key="{{ $key }}" value="{{ $item['qtty'] }}">
                            </td>
                            <td class="cart_total_price">
                                R$ {{ $item['price'] * $item['qtty'] }}
                            </td>
                            <td class="cart_delete">
                                <button class="btn btn-info btn-sm refresh">
                                    <i class="fa fa-refresh"></i>
                                </button>
                                <a href="{{ route('cart.destroy', ['id' => $key]) }}" class="cart_quantity_button">Delete</a>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="text-center">
                                <h4>&nbsp;<p>Nenhum item foi adicionado no carrinho!</p></h4>
                            </td>
                        </tr>
                    @endforelse
                    <tr class="cart_menu">
                        <td colspan="6">
                            <div class="pull-right">
                                <span style="margin-right: 60px;">TOTAL: R$ {{ $cart->getTotal() }}</span>
                                <a href="" class="btn btn-success">Finalizar a compra</a>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
@stop
@section('script')
    <script type="text/javascript">
        $('.refresh').on('click', function () {
            var id = $(this).closest('tr').find('input[type="text"]').attr('key');
            var qtty = $(this).closest('tr').find('input[type="text"]').val();

            $.ajax({
                type: 'POST',
                url: "{{ route('store.cart.change') }}",
                data: {_token: "{{ csrf_token() }}", id: id, qtty: qtty},
                success: function (data) {
                    document.location.reload();
                }
            });
        });

        function validate(evt) {
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        }
    </script>
@stop