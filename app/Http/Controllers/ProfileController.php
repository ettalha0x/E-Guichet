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
            'nome_etudiant' => auth()->user()->name,
            'prenom_etudiant' => auth()->user()->prenom,
            'cne_etudiant' => auth()->user()->cne,
            'cni_etudiant' =>  auth()->user()->cni,
            'appoge' =>  auth()->user()->email,
            'type_email' => $type_email,
            'created_at' => now(),
            'updated_at' => now(),
        ];

        DB::table('email_logs')->insert($data);
    }

    /*
    * A function To Log modules  Emails
    */
    private function insert_Ajout_De_Modules($type_email,$module,$semester) {
        $data = [
            'nom_etudiant' => auth()->user()->name,
            'prenom_etudiant' => auth()->user()->prenom,
            'cne_etudiant' => auth()->user()->cne,
            'cni_etudiant' =>  auth()->user()->cni,
            'appoge' =>  auth()->user()->email,
            'semestre' => $semester,
            'module' => $module,
            'type_email' => 'Demande d ajout de module',
            'created_at' => now(),
            'updated_at' => now(),

        ];

        DB::table('demande_ajout_de_modules')->insert($data);
    }

    /*
    * A function To Log info Correction Emails
    */
    private function insert_Correction_De_Donnees() {
        $data = [
            'nom_etudiant' => auth()->user()->name,
            'prenom_etudiant' => auth()->user()->prenom,
            'cne_etudiant' => auth()->user()->cne,
            'cni_etudiant' =>  auth()->user()->cni,
            'appoge' =>  auth()->user()->email,
            'type_email' => 'Demande de correction de donnees',
            'created_at' => now(),
            'updated_at' => now(),

        ];

        DB::table('demande_correction_de_donnees')->insert($data);
    }
    /*
    * A function To Log Note Correction Emails
    */
    private function insert_correction_de_note($module,$semester) {
        $data = [
            'nom_etudiant' => auth()->user()->name,
            'prenom_etudiant' => auth()->user()->prenom,
            'cne_etudiant' => auth()->user()->cne,
            'cni_etudiant' =>  auth()->user()->cni,
            'appoge' =>  auth()->user()->email,
            'semestre' => $semester,
            'module' => $module,
            'type_email' => 'Demande de correction de note',
            'created_at' => now(),
            'updated_at' => now(),

        ];

        DB::table('demande_de_corrections')->insert($data);
    }
    /*
    *
    */

    private function mail_validate($number)
    {
        $Number_of_Months = now()->subMonths($number);
        $previousEmailLog = DB::table('demande_ajout_de_modules')
        ->where('appoge', '=', auth()->user()->email)
        ->where('created_at', '>=', $Number_of_Months)
        ->first();

        if ($previousEmailLog !== null)
            return FALSE;

        return TRUE;
    }

    /*
    * A function that validates the note corections email
    */

    private function mail_validate_for_note($type_email,$number,$module,$semestre,$tabel)
    {
        $Number_of_Months = now()->subMonths($number);
        $previousEmailLog = DB::table($tabel)
        ->where('appoge', '=', auth()->user()->email)
        ->where('type_email', '=', $type_email)
        ->where('created_at', '>=', $Number_of_Months)
        ->where('semestre', '=', $semestre)
        ->where('module', '=', $module)
        ->first();

        if ($previousEmailLog !== null)
            return FALSE;
        return TRUE;
    }

    /*
    *
    */
    private function mail_validate_for_info($type_email,$number,$tabel)
    {
        $Number_of_Months = now()->subMonths($number);
        $previousEmailLog = DB::table($tabel)
        ->where('appoge', '=', auth()->user()->email)
        ->where('type_email', '=', $type_email)
        ->where('created_at', '>=', $Number_of_Months)
        ->first();

        if ($previousEmailLog !== null)
            return FALSE;
        return TRUE;
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
        ////////////// vars from env//////////////////
        $receiver_1 = env('RECEIVER_1');
        $receiver_2 = env('RECEIVER_2');
        $receiver_3 = $request->input('receiver');

        $number =   env('Months_limit_for_Grades_Corrections');
        /////////////////////////////////////////

        $module = $request->input('module');
        $semester = $request->input('semester');
        $table = 'demande_de_corrections';

        if ($this->mail_validate_for_note("Demande de correction de note",$number,$module,$semester,$table))
        {

            if ($semester != null && $module != null)
            {
                    # code...
                    Mail::to($receiver_1)->send(new correctMail($module, $semester));
                    Mail::to($receiver_2)->send(new correctMail($module, $semester));
                    Mail::to($receiver_3)->send(new correctMail($module, $semester));

                    $this->insert_correction_de_note($module, $semester);
                    return inertia('Dashboard')->with([
                        'status' => 'success',
                        'message' => 'submited',
                    ]);
                }
            else {
                return inertia('Dashboard')->with([
                    'status' => 'success',
                    'message' => 'submited',
                ]);
            }
        }
        else {
            return inertia('Dashboard')->with([
                'status' => 'error',
                'message' => 'not sub',
            ]);
        }

    }

    public function correction_de_donnees(Request $request)
    {
        //////////////RECEIVERS//////////////////
        $receiver_1 = env('RECEIVER_1');
        $receiver_2 = env('RECEIVER_2');

        $number =   env('Months_limit_for_Grades_Corrections');
        $receiver_3 = env('RECEIVER_3');
        ////////////////////////////////////////

        $data = [
            'nouveau nom' => $request->input('newname'),
            'nouveau renom' => $request->input('newprenom'),
            'nouveau cne' => $request->input('newcne'),
            'nouveau cni' => $request->input('newcni'),
            'nouveau date' => $request->input('newdate'),
        ];

        $table = 'demande_correction_de_donnees';

        if ($this->mail_validate_for_info('Demande de correction de donnees',$number,$table))
        {
            Mail::to($receiver_1)->send(new infoMail($data));
            Mail::to($receiver_2)->send(new infoMail($data));
            Mail::to($receiver_3)->send(new infoMail($data));

            $this->insert_Correction_De_Donnees();

            return inertia('Dashboard')->with([
                'status' => 'success',
                'message' => 'submited',
            ]);
        }
        else {
            return inertia('Dashboard')->with([
                'status' => 'error',
                'message' => 'you alr change your info',
            ]);

        }
    }

    public function ajout_de_module(Request $request)
    {
        //////////////RECEIVERS//////////////////
        $receiver_1 = env('RECEIVER_1');
        $receiver_2 = env('RECEIVER_2');

        $number =   env('Months_limit_for_Modules_add');

        $receiver_3 =  $request->input('receiver');;
        ////////////////////////////////////////////////////////////////

        $modules = $request->input('modules');
        $semester = $request->input('semester');



        if ($this->mail_validate($number))
        {
            # code...

            Mail::to($receiver_1)->send(new addMail($modules,$semester));
            Mail::to($receiver_2)->send(new addMail($modules,$semester));
            Mail::to($receiver_3)->send(new addMail($modules,$semester));

            foreach ($modules as $module) {
                $this->insert_Ajout_De_Modules( 'Demande d ajout de module',$module, $semester);
            }
            return inertia('Dashboard')->with([
                'status' => 'success',
                'message' => 'submited',
            ]);
        }
        else{
            return inertia('Dashboard')->with([
                'status' => 'error',
                'message' => 'you can submite once in year',
            ]);
        }
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
