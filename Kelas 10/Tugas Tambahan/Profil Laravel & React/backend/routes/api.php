<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ContactController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);
