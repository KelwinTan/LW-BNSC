<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthenticateUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user =  JWTAuth::parseToken()->authenticate();
        if($user == null){
            return response()->json(['message' => 'Unauthorized'], 200);
        }
        $request->user = $user;
        return $next($request);
    }
}
