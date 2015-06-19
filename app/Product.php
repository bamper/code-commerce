<?php

namespace CodeCommerce;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    /**
     * @var array
     */
    protected $fillable = ['name', 'description', 'price'];

}
