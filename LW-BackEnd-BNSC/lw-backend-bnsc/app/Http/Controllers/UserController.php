<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\User;
use Webpatser\Uuid\Uuid;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Tymon\JWTAuth\JWTAuth;

class UserController extends Controller
{
    use AuthenticatesUsers;

    public function Register(UserRequest $request){
//        dd($request->name);
        if($request->hasFile('picture')) {
            //Get FileName with the extension
            $fileNameWithExt = $request->file('picture')->getClientOriginalName();
            //Get just filename
            $fileName = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            //Get Just ext
            $extension = $request->file('picture')->getClientOriginalExtension();
            //File Name to store
            $fileNameToStore = $fileName.'_'.time().'.'.$extension;
            //Upload Image
            $picture = $request->file('picture')->storeAs('public/profile', $fileNameToStore);
            $path = 'profile/'.$fileNameToStore;
        }else{
            $path = 'No Profile Picture';
        }
        User::create([
           'id' => Uuid::generate()->string,
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt(base64_decode($request->password)),
            'dob' => $request->dob,
            'phone' => $request->phone,
            'picture' => $path,
        ]);
        return response()->json('Registration Success!');
    }

    public function Login(Request $request){
        if ($this->hasTooManyLoginAttempts($request)){
            //Fire the lockout event.
            $this->fireLockoutEvent($request);
            //redirect the user back after lockout.
//            dd("weh salah");

            $user = User::where('username', $request->username)->first();

            //            dd($user->email);
            return $this->sendLockoutResponse($request);
        }

        $credentials['username'] = $request->username;
        $credentials['password'] = base64_decode($request->password);
//        dd($credentials);

//        dd(JWTAuth::attempt($credentials));
        try{
            if(! $token = \Tymon\JWTAuth\Facades\JWTAuth::attempt($credentials)){
//                $attempts = $attempts + 1;
                $this->incrementLoginAttempts($request);
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        }catch(JWTException $e){
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
//        echo("Hello");
        $this->clearLoginAttempts($request);

        return response()->json(compact('token', ['user' => auth()->user()]));
    }

//    public function getAuthenticatedUser(){
//        try{
//            if(!$user = JWTAuth::parseToken()->authenticate()){
//                return response()->json(['user_not_found'], 404);
//            }
//        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredExceptions $e){
//            return response()->json(['token_expired'], $e->getStatusCode());
//        }catch(Tymon\JWTAuth\Exceptions\TokenInvalidExceptions $e){
//            return response()->json(['token_inavlid'], $e->getStatusCode());
//        }catch(Tymon\JWTAuth\Exceptions\JWTException $e){
//            return response()->json(['token_absent'], $e->getStatusCode());
//        }
//        return response()->json(compact('user'));
//    }

}
