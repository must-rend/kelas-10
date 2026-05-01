<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
        * Seed the application's database.
        */
    public function run(): void
    {
        // Seed Skills
        Skill::insert([
            ['name' => 'React.js', 'category' => 'Frontend', 'level_percentage' => 90],
            ['name' => 'HTML & CSS', 'category' => 'Frontend', 'level_percentage' => 95],
            ['name' => 'Tailwind CSS', 'category' => 'Frontend', 'level_percentage' => 85],
            ['name' => 'Laravel', 'category' => 'Backend', 'level_percentage' => 85],
            ['name' => 'PHP', 'category' => 'Backend', 'level_percentage' => 80],
            ['name' => 'MySQL', 'category' => 'Backend', 'level_percentage' => 75],
            ['name' => 'Git & GitHub', 'category' => 'Tools', 'level_percentage' => 85],
            ['name' => 'Figma', 'category' => 'Tools', 'level_percentage' => 70],
        ]);

        // Seed Projects
        Project::insert([
            [
                'title' => 'E-Commerce Platform',
                'description' => 'Platform e-commerce modern dengan fitur keranjang belanja, checkout, dan integrasi payment gateway. Dibangun dengan fokus pada kecepatan dan UX.',
                'tech_stack' => 'React, Laravel, Tailwind, MySQL',
                'link' => '#',
                'image' => 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'Task Management App',
                'description' => 'Aplikasi manajemen tugas tim dengan fitur realtime kolaborasi, kanban board, dan notifikasi.',
                'tech_stack' => 'React, Node.js, Socket.io',
                'link' => '#',
                'image' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'Portfolio Generator',
                'description' => 'Sistem generator portofolio dinamis untuk developer dengan integrasi GitHub API dan export PDF.',
                'tech_stack' => 'Vue.js, Laravel, Postgres',
                'link' => '#',
                'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ]
        ]);
    }
}
