<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() : bool
    {
        return true;
    }

    /**
     * Returns custom validation error messages
     *
     * @return array
     */
    public function messages() : array
    {
        return [
            'gender.regex' => 'The gender field must be "male" or "female".',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules() : array
    {
        return [
            'first_name'  => 'required|alpha:ascii',
            'last_name'   => 'required|alpha:ascii',
            'middle_name' => 'alpha:ascii',
            'username'    => 'required|unique:users|alpha_num:ascii|min:8',
            'birthdate'   => 'required|date_format:m/d/Y',
            'email'       => 'required|email:rfc,dns|unique:users',
            'gender'      => ['regex:/^(male|female)$/'],// Due to pipe in regex
            'password'    => 'required:string|min:8|confirmed'
        ];
    }
}
