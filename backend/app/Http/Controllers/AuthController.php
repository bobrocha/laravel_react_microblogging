<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Registers a user by creating him in the database
     * after validating a form request.
     *
     * @param RegisterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request) : \Illuminate\Http\JsonResponse
    {
        $user = User::create($request->validated());

        return response()->json([
            'user'    => $user,
            'success' => true,
        ], 201);
    }

    public function login(LoginRequest $request) : array
    {
        $data          = $request->validated();
        $authenticated = Auth::attempt($data);
        $user          = [];

        if($authenticated) {
            $user = User::where('email', $data['email'])->get()->first();
        }

        return compact('authenticated', 'user');
    }

    public function logout()
    {
        // stup
    }
}
