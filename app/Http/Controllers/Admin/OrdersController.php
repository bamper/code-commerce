<?php

namespace CodeCommerce\Http\Controllers\Admin;

use CodeCommerce\Http\Controllers\Controller;
use CodeCommerce\Order;
use Illuminate\Http\Request;

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

    /**
     * Edit a order.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $order = $this->orders->find($id);
        $status = $this->orders->statusDescription;

        return view('orders.edit', compact('order', 'status'));
    }

    /**
     * Update a order.
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $this->orders->find($id)->update($request->all());

        return redirect()->route('orders');
    }
}