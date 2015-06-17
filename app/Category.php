<?php

namespace CodeCommerce;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    /**
     * @var array
     */
    protected $fillable = ['name', 'description'];

}