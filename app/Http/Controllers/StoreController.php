<?php

namespace CodeCommerce\Http\Controllers;

use Illuminate\Http\Request;

use CodeCommerce\Category;
use CodeCommerce\Product;
use CodeCommerce\Tag;
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
     * @var Tag
     */
    private $tag;

    /**
     * @param Category $category
     * @param Product $product
     * @param Tag $tag
     */
    function __construct(Category $category, Product $product, Tag $tag)
    {
        $this->category = $category;
        $this->product = $product;
        $this->tag = $tag;
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
    public function category($id)
    {
        $categories = $this->category->orderBy('name')->get();
        $products = $this->product->OfCategory($id)->get();

        return view('store.partial.products-category', compact('categories', 'products'));
    }


    public function product($id)
    {
        $categories = $this->category->orderBy('name')->get();
        $product = $this->product->find($id);

        return view('store.partial.product-details', compact('categories', 'product'));
    }

    /**
     * Show all products by tag.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function tag($id)
    {
        $categories = $this->category->orderBy('name')->get();
        $tag = $this->tag->find($id);

        return view('store.partial.products-tag', compact('categories', 'tag'));
    }
}
