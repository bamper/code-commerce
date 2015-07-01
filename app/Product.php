<?php

namespace CodeCommerce;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'products';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'featured',
        'recommended',
        'category_id'
    ];

    /**
     * List all images of the product.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany('CodeCommerce\ProductImage');
    }

    /**
     * Show category of the product.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo('CodeCommerce\Category');
    }

    /**
     * List all tags of products.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany('CodeCommerce\Tag');
    }

    /**
     * List all featured products.
     *
     * @param $query
     * @return mixed
     */
    public function scopeFeatured($query)
    {
        return $query->where('featured', '=', true);
    }

    /**
     * List all recommended products.
     *
     * @param $query
     * @return mixed
     */
    public function scopeRecommended($query)
    {
        return $query->where('recommended', '=', true);
    }

    /**
     * List all products by category id.
     *
     * @param $query
     * @param $id
     * @return mixed
     */
    public function scopeOfCategoryId($query, $id)
    {
        return $query->where('category_id', '=', $id);
    }

    /**
     * Create a new attribute of name with description.
     *
     * @return string
     */
    public function getNameDescriptionAttribute()
    {
        return $this->name . ' - ' . $this->description;
    }

    /**
     * Get Tag List.
     *
     * @return string
     */
    public function getTagListAttribute()
    {
        $tags = $this->tags->lists('name')->toArray();

        return implode(',', $tags);
    }

}
