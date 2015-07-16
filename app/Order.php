<?php

namespace CodeCommerce;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'total',
        'status'
    ];

    private $statusDescription = [
        0 => 'Processando',
        1 => 'Aguardando Pagamento',
        2 => 'Aguardando Faturamento',
        3 => 'Pago',
        4 => 'Cancelado',
        5 => 'Entregue Transportadora',
        6 => 'Pedido Concluído'
    ];

    /**
     * List all items.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items()
    {
        return $this->hasMany('CodeCommerce\OrderItem');
    }

    /**
     * Return user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('CodeCommerce\User');
    }

    /**
     * Return status order.
     *
     * @return mixed
     */
    public function scopeStatus()
    {
        return $this->statusDescription[$this->status];
    }
}
