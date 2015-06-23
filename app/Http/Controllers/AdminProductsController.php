<?php

namespace CodeCommerce\Http\Controllers;

use CodeCommerce\Product;
use CodeCommerce\Http\Requests;

class AdminProductsController extends Controller
{
    protected $products;

    /**
     * Create a new controller instance.
     *
     * @param Product $products
     */
    public function __construct(Product $products)
    {
        $this->products = $products;
    }

    /**
     * Display a listing of the products.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $products = $this->products->all();

        return view('products', compact('products'));
    }

    /**
     * Create a product.
     *
     * @return string
     */
    public function create()
    {
        return 'Create category';
    }

    /**
     * Insert a product.
     *
     * @return string
     */
    public function insert()
    {
        return 'Insert category';
    }

    /**
     * Edit a product.
     *
     * @param $id
     * @return string
     */
    public function edit($id)
    {
        return "Edit category {$id}";
    }

    /**
     * Update a product.
     *
     * @param $id
     * @return string
     */
    public function update($id)
    {
        return "Updated category {$id}";
    }

    /**
     * Delete a product.
     *
     * @param $id
     * @return string
     */
    public function delete($id)
    {
        return "Deleted category {$id}";
    }
}
