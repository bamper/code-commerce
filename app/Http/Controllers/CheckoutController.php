<?php

namespace CodeCommerce\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use CodeCommerce\Http\Requests;
use CodeCommerce\Order;
use CodeCommerce\OrderItem;
use CodeCommerce\Events\CheckoutEvent;

use PHPSC\PagSeguro\Items\Item;
use PHPSC\PagSeguro\Requests\Checkout\CheckoutService;

class CheckoutController extends Controller
{
    /**
     * Checkout cart.
     *
     * @param Order $orderModel
     * @param OrderItem $orderItem
     * @return bool|\Illuminate\View\View
     */
    public function place(Order $orderModel, OrderItem $orderItem, CheckoutService $checkoutService)
    {
        if (!Session::has('cart')) {
            return false;
        }

        $cart = Session::get('cart');

        if ($cart->getTotal() > 0) {

            $order = $orderModel->create([
                'user_id' => Auth::user()->id,
                'total' => $cart->getTotal()
            ]);

            // $checkout = $checkoutService->createCheckoutBuilder();

            foreach ($cart->all() as $id => $item) {

                // Adiciona o item no carrinho do PagSeguro
                // $checkout->addItem(new Item($id, $item['name'], number_format($item['price'], 2, '.', ''), $item['qtty']));

                $order->items()->create([
                    'product_id' => $id,
                    'price' => $item['price'],
                    'qty' => $item['qtty'],
                    'total' => $item['qtty'] * $item['price']
                ]);
            }

            $cart->clear();

            // Send e-mail event
            // event(new CheckoutEvent(Auth::user(), $order));

            // $response = $checkoutService->checkout($checkout->getCheckout());

            // return redirect($response->getRedirectionUrl());

            return view('store.checkout', compact('order'));
        }

        return view('store.checkout', ['cart' => 'empty']);
    }
}
