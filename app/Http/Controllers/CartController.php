<?php

namespace CodeCommerce\Http\Controllers;

use CodeCommerce\Cart;
use CodeCommerce\Http\Requests;
use CodeCommerce\Product;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Session\Session;

class CartController extends Controller
{
    /**
     * @var Session
     */
    private $session;

    /**
     * @var Cart
     */
    private $cart;

    /**
     * @var Product
     */
    private $product;

    /**
     * Construct injections.
     *
     * @param Session $session
     * @param Cart $cart
     * @param Product $product
     */
    public function __construct(Session $session, Cart $cart, Product $product)
    {
        $this->session = $session;
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
        if (!$this->session->has('cart')) {
            $this->session->set('cart', $this->cart);
        }

        return view('store.cart', ['cart' => $this->session->get('cart')]);
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

        $this->session->set('cart', $cart);

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

        $this->session->set('cart', $cart);

        return redirect()->route('cart');
    }

    /**
     *
     *
     * @param Request $request
     * @return string
     */
    public function change(Request $request)
    {
        try {
            $id = $request->input('id');
            $qtty = $request->input('qtty');

            $cart = $this->getCart();
            $cart->updateQtty($id, $qtty);

            return ['status' => 'success'];

        } catch (\Exception $e) {

            return ['status' => 'error', 'message' => $e->getMessage()];
        }
    }

    /**
     * Get cart.
     *
     * @return Cart
     */
    public function getCart()
    {
        if ($this->session->has('cart')) {
            return $this->session->get('cart');
        }

        return $this->cart;
    }
}
