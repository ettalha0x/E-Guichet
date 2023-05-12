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
            $documentRequest->save();


        // Redirect the user to a confirmation page or show a success message
        return redirect('/dashboard')->with('success', 'Document request submitted successfully');
    }
}
