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
    public $semester;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($modules, $semester)
    {
        $this->modules = $modules;
        $this->semester = $semester;
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
                        'semester' => $this->semester
                    ]);
    }
}
