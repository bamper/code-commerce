<?php

namespace CodeCommerce\Http\Requests\Admin;

use CodeCommerce\Http\Requests\Request;

class ProductsRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:5',
            'description' => 'required',
            'price' => array('required', 'regex:/^\d*(\.\d{2})?$/'),
            'featured' => 'required',
            'recommended' => 'required'
        ];
    }
}
