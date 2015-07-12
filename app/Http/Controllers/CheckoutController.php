<?php

namespace CodeCommerce\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use CodeCommerce\Http\Requests;
use CodeCommerce\Order;
use CodeCommerce\OrderItem;

class CheckoutController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function place(Order $orderModel, OrderItem $orderItem)
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

            foreach ($cart->all() as $id => $item) {
                $order->items()->create([
                    'product_id' => $id,
                    'price' => $item['price'],
                    'qty' => $item['qtty'],
                    'total' => $item['qtty'] * $item['price']
                ]);
            }

            dd($order->items());
        }
    }
}
