<?php

namespace App\Providers;

use App\Fieldtypes\AltchaFieldtype;
use App\Http\Controllers\AltchaController;
use App\Modifiers\Obfuscator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        AltchaFieldtype::register();

        Validator::extend('altcha', function ($attribute, $value) {
            return AltchaController::verify($value);
        }, 'Sicherheitspruefung fehlgeschlagen. Bitte versuchen Sie es erneut.');

        Obfuscator::register();
    }
}
