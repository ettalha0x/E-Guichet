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


class ProfileController extends Controller
{
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

    public function email_c(Request $request)
    {
        $recever = 'xxmesxx2@gmail.com';
        $module = $request->input('module');
    $semester = $request->input('semester');
    Mail::to($recever)->send(new correctMail($module, $semester));

    }
       public function info_correct(Request $request)
    {
        $data = [
            'nouveau nom' => $request->input('newname'),
            'nouveau renom' => $request->input('newprenom'),
            'nouveau cne' => $request->input('newcne'),
            'nouveau cni' => $request->input('newcni'),
            'nouveau date' => $request->input('newdate'),
        ];
         //SEND email
        $recever = 'xxmesxx2@gmail.com';

        Mail::to($recever)->send(new infoMail($data));

    }

    public function Add_modules(Request $request)
    {

         //SEND email
        $recever = 'xxmesxx2@gmail.com';
        $modules = $request->input('modules');

        Mail::to($recever)->send(new addMail($modules));
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
