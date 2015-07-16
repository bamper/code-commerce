<?php

namespace CodeCommerce\Http\Controllers\Admin;

use CodeCommerce\Http\Controllers\Controller;
use CodeCommerce\Order;

class OrdersController extends Controller
{
    protected $orders;

    /**
     * Create a new controller instance.
     *
     * @param Order $orders
     */
    public function __construct(Order $orders)
    {
        $this->orders = $orders;
    }

    /**
     * Display a listing of the orders.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $orders = $this->orders->orderBy('id', 'DESC')->paginate(10);

        return view('orders.index', compact('orders'));
    }
}