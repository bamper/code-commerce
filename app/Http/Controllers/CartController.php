<?php

namespace CodeCommerce\Http\Controllers;

use CodeCommerce\Cart;
use CodeCommerce\Http\Requests;
use CodeCommerce\Product;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Request;

class CartController extends Controller
{
    private $cart;

    private $product;

    /**
     * @param Cart $cart
     * @param Product $product
     */
    public function __construct(Cart $cart, Product $product)
    {
        $this->cart = $cart;
        $this->product = $product;
    }

    /**
     * Show the cart items.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        if (!Session::has('cart')) {
            Session::set('cart', $this->cart);
        }

        return view('store.cart', ['cart' => Session::get('cart')]);
    }

    /**
     * Add item to the cart.
     *
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function add($id)
    {
        $cart = $this->getCart();

        $product = $this->product->find($id);
        $cart->add($id, $product->name, $product->price);

        Session::set('cart', $cart);

        return redirect()->route('cart');
    }

    /**
     * Remove item of the cart.
     *
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $cart = $this->getCart();
        $cart->remove($id);

        Session::set('cart', $cart);

        return redirect()->route('cart');
    }

    /**
     *
     *
     * @param Request $request
     * @return string
     */
    public function qtty(Request $request)
    {
        $data = $request->all();
        $cart = $this->getCart();

        $cart->updateQtty($data['id'], $data['qtty']);

        return true;
    }

    /**
     * Get cart.
     *
     * @return Cart
     */
    public function getCart()
    {
        if (Session::has('cart')) {
            return Session::get('cart');
        }

        return $this->cart;
    }
}
