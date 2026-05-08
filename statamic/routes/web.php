<?php

use App\Http\Controllers\AltchaController;
use Illuminate\Support\Facades\Route;

// ALTCHA Proof-of-Work Challenge endpoint (consumed by the Kontakt form)
Route::get('/altcha/challenge', [AltchaController::class, 'challenge']);

// Sitemap
Route::statamic('/sitemap.xml', 'sitemap', ['layout' => 'sitemap_layout']);
