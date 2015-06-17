<?php

namespace CodeCommerce\Http\Controllers;

use CodeCommerce\Category;
use CodeCommerce\Http\Requests;

class IndexController extends Controller
{
    protected $categories;

    /**
     * Create a new controller instance.
     *
     * @param Category $categories
     */
    public function __construct(Category $categories)
    {
        $this->categories = $categories;
    }

    /**
     * Show the application welcome screen to the user.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('index');
    }

    /**
     * List all categories
     *
     * @return \Illuminate\View\View
     */
    public function categories()
    {
        $categories = $this->categories->all();

        return view('categories', compact('categories'));
    }
}
