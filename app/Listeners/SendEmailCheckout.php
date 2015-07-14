<?php

namespace CodeCommerce\Listeners;

use CodeCommerce\Events\CheckoutEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailCheckout
{
    /**
     * Create the event listener.
     *
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  CheckoutEvent  $event
     * @return void
     */
    public function handle(CheckoutEvent $event)
    {
//        $user = $event->getUser();
//        $order = $event->getOrder();

//        Mail::send('emails.welcome', $data, function ($message) use ($auth) {
//            $message->to($auth->email, $auth->name)->subject('CodeCommerce - Compra realizada');
//        });
    }
}
