<?php

namespace CodeCommerce\Http\Controllers;

use CodeCommerce\Http\Requests;

class IndexController extends Controller
{
    /**
     * Show the application welcome screen to the user.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('index');
    }
}
