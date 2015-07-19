<?php

namespace CodeCommerce\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use CodeCommerce\Http\Requests;
use CodeCommerce\Order;
use CodeCommerce\OrderItem;

use Illuminate\Support\Facades\Log;
use PHPSC\PagSeguro\Items\Item;
use PHPSC\PagSeguro\Requests\Checkout\CheckoutService;
use Symfony\Component\HttpFoundation\Session\Session;

class CheckoutController extends Controller
{
    /**
     * Checkout cart.
     *
     * @param Session $session
     * @param Order $orderModel
     * @param OrderItem $orderItem
     * @param CheckoutService $checkoutService
     * @return bool|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     */
    public function place(Session $session, Order $orderModel, OrderItem $orderItem, CheckoutService $checkoutService)
    {
        if (!$session->has('cart')) {
            return false;
        }

        $cart = $session->get('cart');

        if ($cart->getTotal() > 0) {

            $order = $orderModel->create([
                'user_id' => Auth::user()->id,
                'total' => $cart->getTotal()
            ]);

            $checkout = $checkoutService->createCheckoutBuilder();
            $checkout->setReference($order->id);

            foreach ($cart->all() as $id => $item) {

                // Adiciona o item no carrinho do PagSeguro
                $checkout->addItem(new Item($id, $item['name'], number_format($item['price'], 2, '.', ''), $item['qtty']));

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

            $checkout = $checkout->getCheckout();

            $response = $checkoutService->checkout($checkout);

            return redirect($response->getRedirectionUrl());
        }

        return view('store.checkout', ['cart' => 'empty']);
    }

    /**
     * Checkout pagseguro.
     *
     * @param Request $request
     */
    public function pagseguro(Request $request)
    {
        Log::info($request->all());
    }
}
