<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface HistoriesRepositoryInterface {
    public function watchHistoryStore(Request $request); // User interface
    public function getWatchHistory(Request $request); // Dashboard
}
