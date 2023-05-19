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
        ->where('appoge', '=', auth()->user()->email)
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

        $currentDate = Carbon::now(config('app.timezone'))->format('Y-m-d');

        // Count the number of records for the current date
        $count = DB::table('document')->whereDate('created_at', $currentDate)->count();

         // Check if the maximum limit of  records per day has been reached
            $number =  env('maximum_number_of_docs_per_day');

        if ($count >= $number) {
            redirect('error'); //'Maximum limit of 40 records per day has been reached'
        }
        else {
            if ($this->documentRequest_validate(1))
                $documentRequest->save();
        }


        // Redirect the user to a confirmation page or show a success message  
        return redirect('/dashboard')->with('success', 'Document request submitted successfully');
    }
}
