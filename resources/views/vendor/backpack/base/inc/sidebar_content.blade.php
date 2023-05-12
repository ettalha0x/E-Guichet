{{-- This file is used to store sidebar items, inside the Backpack admin panel --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<li class="nav-item"><a class="nav-link" href="{{ backpack_url('document') }}"><i class="nav-icon la la-question"></i> Documents</a></li>

<li class="nav-item"><a class="nav-link" href="{{ backpack_url('user') }}"><i class="nav-icon la la-question"></i> Users</a></li>

<li class="nav-item"><a class="nav-link" href="{{ backpack_url('email-log') }}"><i class="nav-icon la la-question"></i> Email logs</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('demande-ajout-de-module') }}"><i class="nav-icon la la-question"></i> Demande ajout de modules</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('demande-correction-de-donnees') }}"><i class="nav-icon la la-question"></i> Demande correction de donnees</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('demande-de-correction') }}"><i class="nav-icon la la-question"></i> Demande de corrections</a></li>