<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Auth;


use Illuminate\Routing\Controller;






/**
 * Class SettingsController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class SettingsController extends Controller
{


  
    public function index(Request $request)
    {
        
        
        // if (auth()->user()->role != 'superadmin') {
        //     abort(403,'Unauthorized Action');
        // }

        $receiver_1 = env('RECEIVER_1');
        $receiver_2 = env('RECEIVER_2');
        $note_c = env('Months_limit_for_Grades_Corrections');
        $info_c = env('Months_limit_for_info_Corrections');
        $m_add = env('Months_limit_for_Modules_add');
        $max_doc = env('maximum_number_of_docs_per_day');
        $doc_r = env('Months_limit_for_docs');

              return view('admin.settings', [
            'title' => 'Paramètres',
            'breadcrumbs' => [
                trans('backpack::crud.admin') => backpack_url('dashboard'),
                'Settings' => false,
            ],
            'page' => 'resources/views/admin/settings.blade.php',
            'controller' => 'app/Http/Controllers/Admin/SettingsController.php',
        ] , compact('receiver_1','receiver_2','note_c','info_c','m_add','max_doc','doc_r'));
    }

    public function parametre(Request $request)
    {

        $receiver_1 = $request->input('receiver_1');
        $receiver_2 = $request->input('receiver_2');
        $note_c = $request->input('note_c');
        $info_c = $request->input('info_c');
        $m_add = $request->input('m_add');
        $max_doc = $request->input('max_doc');
        $doc_r = $request->input('doc_r');

   

        $path = base_path('.env');
        $contents = file_get_contents($path); 
        if ($contents !== false) {
            $updatedContents = str_replace('RECEIVER_1=' . env('RECEIVER_1'), 'RECEIVER_1=' . $receiver_1, $contents);

            $updatedContents = str_replace('Months_limit_for_info_Corrections=' 
                    .env('Months_limit_for_info_Corrections'),
                            'Months_limit_for_info_Corrections=' . strval($info_c), $updatedContents);

            $updatedContents = str_replace('Months_limit_for_Grades_Corrections=' 
                    .env('Months_limit_for_Grades_Corrections'),
                            'Months_limit_for_Grades_Corrections=' . strval($note_c), $updatedContents);

            $updatedContents = str_replace('Months_limit_for_Modules_add=' 
                    .env('Months_limit_for_Modules_add'),
                            'Months_limit_for_Modules_add=' . strval($m_add), $updatedContents);
            
            $updatedContents = str_replace('maximum_number_of_docs_per_day=' 
                    .env('maximum_number_of_docs_per_day'),
                            'maximum_number_of_docs_per_day=' . strval($max_doc), $updatedContents);

           
            $updatedContents = str_replace('Months_limit_for_docs='
                    . env('Months_limit_for_docs'),
                         'Months_limit_for_docs=' . strval($doc_r), $updatedContents);



            $updatedContents = str_replace('RECEIVER_2=' . env('RECEIVER_2'), 'RECEIVER_2=' . $receiver_2, $updatedContents);
        
            file_put_contents($path, $updatedContents);
        }
    
    return redirect('/admin/settings');
    }
}
