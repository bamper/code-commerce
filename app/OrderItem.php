<?php

namespace CodeCommerce;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'order_items';

    protected $fillable = [
        'product_id',
        'price',
        'qty',
        'total'
    ];

    public function order()
    {
        return $this->belongsTo('CodeCommerce\Order');
    }
}
