<?php

namespace App\Http\Middleware;


use App\User;
use Illuminate\Support\Facades\Auth;

use Closure;

class CheckUserRole
{
    protected $user;
    public function handle($request, Closure $next)
    {
       
        dd(Auth::user()); 

        if ($request->user() && $request->user()->role === 'superadmin') {
            return $next($request);
        }
       // abort(403, 'Unauthorized action.');

    }
}
