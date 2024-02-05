<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;

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

    public function login()
    {
        // stub
    }

    public function logout()
    {
        // stup
    }
}
