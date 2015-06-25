<?php

namespace CodeCommerce\Http\Controllers\Admin;

use CodeCommerce\Category;
use CodeCommerce\Product;
use CodeCommerce\Http\Requests;
use CodeCommerce\Http\Controllers\Controller;
use CodeCommerce\Http\Requests\Admin\ProductsRequest;

class ProductsController extends Controller
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
        $products = $this->products->paginate(10);

        return view('products.index', compact('products'));
    }

    /**
     * Create a product with category.
     *
     * @param Category $category
     * @return \Illuminate\View\View
     */
    public function create(Category $category)
    {
        $categories = $category->lists('name', 'id');

        return view('products.create', compact('categories'));
    }

    /**
     * Insert a product.
     *
     * @param ProductsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ProductsRequest $request)
    {
        $input = $request->all();

        $product = $this->products->fill($input);
        $product->save();

        return redirect()->route('products');
    }

    /**
     * Edit a product.
     *
     * @param $id
     * @param Category $category
     * @return \Illuminate\View\View
     */
    public function edit($id, Category $category)
    {
        $product = $this->products->find($id);
        $categories = $category->lists('name', 'id');

        return view('products.edit', compact('product', 'categories'));
    }

    /**
     * Update a products.
     *
     * @param ProductsRequest $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ProductsRequest $request, $id)
    {
        $this->products->find($id)->update($request->all());

        return redirect()->route('products');
    }

    /**
     * Delete a product.
     *
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $this->products->find($id)->delete();

        return redirect()->route('products');
    }
}
