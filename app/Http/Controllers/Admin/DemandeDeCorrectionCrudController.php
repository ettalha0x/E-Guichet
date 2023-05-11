<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\DemandeDeCorrectionRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class DemandeDeCorrectionCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class DemandeDeCorrectionCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\DemandeDeCorrection::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/demande-de-correction');
        CRUD::setEntityNameStrings('demande de correction', 'demande de corrections');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::column('nom_etudiant');
        CRUD::column('prenom_etudiant');
        CRUD::column('cne_etudiant');
        CRUD::column('cni_etudiant');
        CRUD::column('appoge');
        CRUD::column('semestre');
        CRUD::column('module');
        CRUD::column('type_email');
        CRUD::column('created_at');
        CRUD::column('updated_at');
        CRUD::column('deleted_at');

        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(DemandeDeCorrectionRequest::class);

        CRUD::field('nom_etudiant');
        CRUD::field('prenom_etudiant');
        CRUD::field('cne_etudiant');
        CRUD::field('cni_etudiant');
        CRUD::field('appoge');
        CRUD::field('semestre');
        CRUD::field('module');
        CRUD::field('type_email');

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
