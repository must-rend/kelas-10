<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ContactController;

use App\Http\Controllers\Api\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/contacts', [ContactController::class, 'index']);
});

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);

Route::get('/debug-db', function () {
    return [
        'path' => config('database.connections.sqlite.database'),
        'users' => \App\Models\User::all(),
        'cwd' => getcwd()
    ];
});

