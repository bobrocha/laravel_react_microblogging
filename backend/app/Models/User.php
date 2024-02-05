<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
        'first_name',
        'last_name',
        'middle_name',
        'username',
        'birthdate',
        'gender',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Mutator/accessor for the birthdate column
     *
     * @return Attribute
     */
    protected function birthdate() : Attribute
    {
        return Attribute::make(
            get : fn($value) => $value,
            set : fn($value) => Carbon::createFromFormat('m/d/Y', $value)->format('Y-m-d'),
        );
    }

    /**
     * Mutator/accessor for the password column
     *
     * @return Attribute
     */
    protected function password() : Attribute
    {
        return Attribute::make(
            get : fn($value) => $value,
            set : fn($value) => Hash::make($value),
        );
    }
}
