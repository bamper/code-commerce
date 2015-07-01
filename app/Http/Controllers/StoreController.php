<?php

namespace CodeCommerce\Http\Controllers;

use Illuminate\Http\Request;

use CodeCommerce\Category;
use CodeCommerce\Product;
use CodeCommerce\Http\Requests;

class StoreController extends Controller
{
    /**
     * @var Category
     */
    private $category;
    /**
     * @var Product
     */
    private $product;

    /**
     * @param Category $category
     * @param Product $product
     */
    function __construct(Category $category, Product $product)
    {
        $this->category = $category;
        $this->product = $product;
    }

    /**
     * Show the store application to the user.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $categories = $this->category->orderBy('name')->get();
        $featureds = $this->product->Featured()->limit(3)->get();
        $recommends = $this->product->Recommended()->limit(3)->get();

        return view('store.index', compact('categories', 'featureds', 'recommends'));
    }

    /**
     * Show all products by category id.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function productCategory($id)
    {
        $categories = $this->category->orderBy('name')->get();
        $products = $this->product->OfCategoryId($id)->get();

        return view('store.products-category', compact('categories', 'products'));
    }
}
