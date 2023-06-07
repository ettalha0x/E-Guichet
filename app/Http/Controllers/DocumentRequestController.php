<?php
namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Exception;
use Carbon\Carbon;
use  Illuminate\Support\Facades\DB;
class DocumentRequestController extends Controller
{
    private function documentRequest_validate($number)
    {
        $Number_of_Months = now()->subMonths($number);
        $previousEmailLog = DB::table('document')
        ->where('appoge', '=', auth()->user()->Appoge)
        ->where('created_at', '>=', $Number_of_Months)
        ->first();

        if ($previousEmailLog !== null)
            return FALSE;

        return TRUE;
    }




    public function store(Request $request)
    {
        // Retrieve the selected documents from the request input
        $selectedDocuments = $request->input('selected_documents');
        // Create a new DocumentRequest instance for each selected document

            $documentRequest = new Document();
            $documentRequest->nom = $request->input('name');
            $documentRequest->prenom = auth()->user()->prenom;
            $documentRequest->cne = auth()->user()->cne;
            $documentRequest->cni = auth()->user()->cni;
            $documentRequest->telephone = auth()->user()->telephone;
            $documentRequest->appoge = $request->input('appoge');
            $scolarite = $request->input('scolarite');
            $releve = $request->input('relevedenote');

            if ($scolarite && $releve) {
                $documentRequest->scolarite = true;
                $documentRequest->relevedenote = true;
            } elseif ($scolarite) {
                $documentRequest->scolarite = true;
            } elseif ($releve) {
                $documentRequest->relevedenote = true;
            }

        // Get the current Date
        $currentDate = Carbon::now(config('app.timezone'))->format('Y-m-d');

        // Count the number of records for the current date
        $count = DB::table('document')->whereDate('created_at', $currentDate)->count();

        // Check if the maximum limit of  records per day has been reached
        $number =  env('maximum_number_of_docs_per_day');

        // giting the env var for the validation
        $num_Monts =  env('maximum_number_of_docs_per_day'); //1

        if ($count >= $number) {
            return inertia('Dashboard')->with([
                'status' => 'error',
                'message' => 'le maximum de demande par jour est atteint',
            ]); //'Maximum limit of 40 records per day has been reached'
        }
        else {
            if ($this->documentRequest_validate($num_Monts))
            {
                $documentRequest->save();
                return inertia('Dashboard')->with([
                    'status' => 'success',
                    'message' => 'bien submited',
                ]);
            }
            return inertia('Dashboard')->with([
                'status' => 'error',
                'message' => 'vous avez deja fait une demande ce mois ci',
            ]);
        }


        // Redirect the user to a confirmation page or show a success message
        return redirect('/dashboard')->with('success', 'Document request submitted successfully');
    }
}
