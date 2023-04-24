<?php
namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentRequestController extends Controller
{
    public function store(Request $request)
    {
        // Retrieve the selected documents from the request input
        $selectedDocuments = $request->input('selected_documents');
        // Create a new DocumentRequest instance for each selected document

            $documentRequest = new Document();
            $documentRequest->nom = $request->input('name');
            // $documentRequest->prenom = $request->input('prenom');
            // $documentRequest->cne = $request->input('cne');
            // $documentRequest->cni = $request->input('cni'); can be nullable

            ///////////////this is for testing only ///////////////////////
            $documentRequest->prenom = 'blabla';
            $documentRequest->cne = 'bloblo';
            $documentRequest->cni = 'bolb';
            ///////////////////////////////
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
            $documentRequest->save();


        // Redirect the user to a confirmation page or show a success message
        return redirect('/dashboard')->with('success', 'Document request submitted successfully');
    }
}
