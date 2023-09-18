<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Category;

class ListCategories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'list:categories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to list all categories';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $categories = Category::all(['id', 'name']);

        $this->table(
            ['id', 'name'],
            $categories
        );
        return 0;
    }
}
