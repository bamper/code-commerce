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

    /**
     * Status da transação.
     *
     * 1 => Aguardando pagamento: o comprador iniciou a transação,
     *      mas até o momento o PagSeguro não recebeu nenhuma informação sobre o pagamento.
     *
     * 2 => O comprador optou por pagar com um cartão de crédito e o PagSeguro está analisando o risco da transação.
     *
     * 3 => A transação foi paga pelo comprador e o PagSeguro já recebeu uma confirmação da instituição financeira
     *      responsável pelo processamento.
     *
     * 4 => A transação foi paga e chegou ao final de seu prazo de liberação sem ter sido retornada e sem que haja
     *      nenhuma disputa aberta.
     *
     * 5 => O comprador, dentro do prazo de liberação da transação, abriu uma disputa.
     *
     * 6 => O o valor da transação foi devolvido para o comprador.
     *
     * 7 => A transação foi cancelada sem ter sido finalizada.
     *
     * Outros status menos relevantes foram omitidos. Em resumo, você deve considerar transações nos status de Paga
     * para liberação de produtos ou serviços.
     *
     * 8 => Erro no fechamento do pedido e/ou envio para o pagseguro.
     *
     * @var array
     */

    public $statusDescription = [
        0 => 'Pedido enviado',
        1 => 'Aguardando pagamento',
        2 => 'Em análise',
        3 => 'Paga',
        4 => 'Disponível',
        5 => 'Em disputa',
        6 => 'Devolvida',
        7 => 'Cancelada',
        8 => 'Erro no pedido'
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
