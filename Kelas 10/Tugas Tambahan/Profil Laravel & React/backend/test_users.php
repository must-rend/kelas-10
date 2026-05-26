<?php

require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$users = \App\Models\User::all();
echo "DB Path: " . config('database.connections.sqlite.database') . "\n";
echo "Users in DB:\n";
foreach ($users as $user) {
    echo "- " . $user->email . "\n";
}
