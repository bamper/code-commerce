<?php

namespace CodeCommerce\Http\Controllers\Admin;

use CodeCommerce\Category;
use CodeCommerce\Http\Requests;
use CodeCommerce\Http\Controllers\Controller;
use CodeCommerce\Http\Requests\Admin\CategoriesRequest;

class CategoriesController extends Controller
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
        $categories = $this->categories->paginate(10);

        return view('categories.index', compact('categories'));
    }

    /**
     * Create a categorie.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('categories.create');
    }

    /**
     * Insert a categorie.
     *
     * @param CategoriesRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(CategoriesRequest $request)
    {
        $input = $request->all();

        $category = $this->categories->fill($input);
        $category->save();

        return redirect()->route('categories');
    }

    /**
     * Edit a categorie.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $category = $this->categories->find($id);

        return view('categories.edit', compact('category'));
    }

    /**
     * Save a categorie.
     *
     * @param CategoriesRequest $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(CategoriesRequest $request, $id)
    {
        $this->categories->find($id)->update($request->all());

        return redirect()->route('categories');
    }

    /**
     * Delete a categorie.
     *
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $this->categories->find($id)->delete();

        return redirect()->route('categories');
    }
}
