{{-- This file is used to store sidebar items, inside the Backpack admin panel --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<li class="nav-item"><a class="nav-link" href="{{ backpack_url('document') }}"><i class="nav-icon la la-file-text"></i> Documents</a></li>


<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon    la la-envelope"></i>Gestion des e-mails</a>
    <ul class="nav-dropdown-items">
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('demande-ajout-de-module') }}"><i class="nav-icon la la-plus"></i> Demande ajout de modules</a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('demande-correction-de-donnees') }}"><i class="nav-icon la la-tasks"></i> Demande correction de donnees</a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('demande-de-correction') }}"><i class="nav-icon la la-pencil-square"></i> Demande de corrections</a></li>
        
    </ul>
</li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('settings') }}"><i class="nav-icon la la-question"></i> Settings</a></li>