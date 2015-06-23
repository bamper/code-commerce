<?php

namespace CodeCommerce\Http\Controllers;

use CodeCommerce\Category;
use CodeCommerce\Http\Requests;

class AdminCategoriesController extends Controller
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
     * Display a listing of the categories.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $categories = $this->categories->all();

        return view('categories', compact('categories'));
    }

    /**
     * Create a category.
     *
     * @return string
     */
    public function create()
    {
        return 'Create category';
    }

    /**
     * Insert a category.
     *
     * @return string
     */
    public function insert()
    {
        return 'Insert category';
    }

    /**
     * Edit a category.
     *
     * @param $id
     * @return string
     */
    public function edit($id)
    {
        return "Edit category {$id}";
    }

    /**
     * Update a category.
     *
     * @param $id
     * @return string
     */
    public function update($id)
    {
        return "Updated category {$id}";
    }

    /**
     * Delete a category.
     *
     * @param $id
     * @return string
     */
    public function delete($id)
    {
        return "Deleted category {$id}";
    }
}
