<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class correctMail extends Mailable
{
    use Queueable, SerializesModels;

    public $module;
    public $semester;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($module, $semester)
    {
        $this->module = $module;
        $this->semester = $semester;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.correction')
                    ->with([
                        'module' => $this->module,
                        'semester' => $this->semester,
                    ]);
    }
}
