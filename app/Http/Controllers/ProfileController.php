<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Mail\infoMail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\correctMail;
use App\Mail\addMail;
use Illuminate\Support\Facades\DB;


class ProfileController extends Controller
{
    /**
     * A function To Log All Emails
     */
    private function insertEmailLog($type_email) {
        $data = [
            'nome_tudiant' => auth()->user()->name,
            'prenom_tudiant' => auth()->user()->prenom,
            'cne_tudiant' => auth()->user()->cne,
            'cni_tudiant' =>  auth()->user()->cni,
            'appoge' =>  auth()->user()->email,
            'type_email' => $type_email,
            'created_at' => now(), 
            'updated_at' => now(),
        ];
        
        DB::table('email_logs')->insert($data);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */

    public function correction_de_note(Request $request)
    {
        $receiver = 'youssef.bachar7@gmail.com';
        $module = $request->input('module');
        $semester = $request->input('semester');
        Mail::to($receiver)->send(new correctMail($module, $semester));
        
        $this->insertEmailLog("Demande de correction de note");

    }
       public function correction_de_donnees(Request $request)
    {
        $data = [
            'nouveau nom' => $request->input('newname'),
            'nouveau renom' => $request->input('newprenom'),
            'nouveau cne' => $request->input('newcne'),
            'nouveau cni' => $request->input('newcni'),
            'nouveau date' => $request->input('newdate'),
        ];
         //SEND email
        $receiver = 'youssef.bachar7@gmail.com';

        Mail::to($receiver)->send(new infoMail($data));
        $this->insertEmailLog("Demande de correction de donnees");

    }

    public function ajout_de_module(Request $request)
    {

         //SEND email
        $receiver = 'youssef.bachar7@gmail.com';
        $modules = $request->input('modules');
        $semester = $request->input('semester');
        $semester = 'yoursemester';
       // dd($semester);
         // insert email data into the email_logs table
   
         Mail::to($receiver)->send(new addMail($modules,$semester));
         $this->insertEmailLog("Demande ajout de module");
    }

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
