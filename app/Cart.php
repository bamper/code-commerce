<?php

namespace CodeCommerce;

class Cart
{
    /**
     * @var array
     */
    private $items;

    /**
     * Cart init defines.
     */
    public function __construct()
    {
        $this->items = [];
    }

    /**
     * Add item cart.
     *
     * @param $id
     * @param $name
     * @param $price
     * @return array
     */
    public function add($id, $name, $price)
    {
        $this->items += [
            $id => [
                'qtty' => isset($this->items[$id]['qtty']) ? $this->items[$id]['qtty']++ : 1,
                'price' => $price,
                'name' => $name
            ]
        ];

        return $this->items;
    }

    /**
     * Remove item cart.
     *
     * @param $id
     */
    public function remove($id)
    {
        unset($this->items[$id]);
    }

    /**
     * List all items cart.
     *
     * @return array
     */
    public function all()
    {
        return $this->items;
    }

    /**
     * Get total price of the cart.
     *
     * @return int
     */
    public function getTotal()
    {
        $total = 0;

        foreach($this->items as $item)
        {
            $total = $item['qtty'] * $item['price'];
        }

        return $total;
    }

    /**
     * Update quantity cart.
     *
     * @param $id
     * @param $qtty
     */
    public function updateQtty($id, $qtty)
    {
        if($qtty == 0) {
            $this->destroy($id);
        } else {
            $this->items[$id]['qtty'] = $qtty;
        }
    }

    /**
     * Destroy item cart
     *
     * @param $id
     */
    public function destroy($id)
    {
        unset($this->items[$id]);
    }
}