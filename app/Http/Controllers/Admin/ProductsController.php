<?php

namespace CodeCommerce\Http\Controllers\Admin;

use CodeCommerce\Category;
use CodeCommerce\Product;
use CodeCommerce\Http\Requests;
use CodeCommerce\Http\Controllers\Controller;
use CodeCommerce\Http\Requests\Admin\ProductsRequest;
use CodeCommerce\ProductImage;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

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

    /**
     * List all images by product id.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function images($id)
    {
        $product = $this->products->find($id);

        return view('products.images', compact('product'));
    }

    /**
     * Create a new image by product id.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function createImage($id)
    {
        $product = $this->products->find($id);

        return view('products.create-image', compact('product'));
    }

    /**
     * Store a new image on disk.
     *
     * @param Requests\ProductImageRequest $request
     * @param ProductImage $productImage
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeImage(Requests\ProductImageRequest $request, ProductImage $productImage, $id)
    {
        // Get file upload
        $file = $request->file('image');

        // Get extension of file
        $extension = $file->getClientOriginalExtension();

        $image = $productImage::create(['product_id' => $id, 'extension' => $extension]);

        Storage::disk('public')->put($image->id . '.' . $extension, File::get($file));

        return redirect()->route('products.images', ['id' => $id]);
    }

    /**
     * Delete a image.
     *
     * @param ProductImage $productImage
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroyImage(ProductImage $productImage, $id)
    {
        $image = $productImage->find($id);

        if (file_exists(public_path('uploads') . '/' . $image->id . '.' . $image->extension)) {
            Storage::disk('public')->delete($image->id . '.' . $image->extension);
        }

        $product = $image->product;
        $image->delete();

        return redirect()->route('products.images', ['id' => $product->id]);
    }

}
