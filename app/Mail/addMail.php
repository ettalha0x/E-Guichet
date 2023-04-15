<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class addMail extends Mailable
{
    use Queueable, SerializesModels;

    public $modules;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($modules)
    {
        $this->modules = $modules;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.addmodule')
                    ->with([
                        'modules' => $this->modules,
                    ]);
    }
}
