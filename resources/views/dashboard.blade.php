<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{-- {{ __('Dashboard') }} --}}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{ __("You're logged in!") }}
                </div>
            </div>
            <h1>
                {{auth()->user()->name}}
            </h1>
        </div>
        <div>
      <span>Fillier:</span>
      <span>aa</span>
    </div>
    <div>
      <span>Date/Lieu de naissance:</span>
      <span>gg</span>
    </div>
    <div>
      <span>CNI:</span>
      <span>hh</span>
    </div>
    <div>
      <span>Appoge:</span>
      <span>77</span>
    </div>
    <div>
      <span>Prenom:</span>
      <span>{{auth()->user()->email}}</span>
    </div>
    <div>
      <span>Nom:</span>
      <span>{{auth()->user()->name}}</span>
    </div>
    </div>

    {{-- <select name="category_id"> --}}
        {{-- @foreach($models as $model) --}}
            {{-- <option value="{{}}"></option> --}}
        {{-- @endforeach --}}
    {{-- </select> --}}
    
</x-app-layout>
