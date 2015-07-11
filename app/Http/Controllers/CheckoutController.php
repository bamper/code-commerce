<?php

namespace CodeCommerce\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use CodeCommerce\Http\Requests;
use CodeCommerce\Http\Controllers\Controller;
use CodeCommerce\Order;
use CodeCommerce\OrderItem;

class CheckoutController extends Controller
{
    public function place(Order $orderModel, OrderItem $orderItem)
    {
        if (!Session::has('cart')) {
            return false;
        }

        $cart = Session::get('cart');

        if ($cart->getTotal() > 0) {

            $order = $orderModel->create([
                'user_id' => 1, // Auth::user()->id
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
