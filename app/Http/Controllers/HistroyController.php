<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\HistoriesRepositoryInterface;

class HistroyController extends Controller
{
    private HistoriesRepositoryInterface $historiesRepository;

    public function __construct(HistoriesRepositoryInterface $historiesRepository) {
        $this->historiesRepository = $historiesRepository;
    }

    public function watchHistoryStore(Request $request)  // user interface
    {
        return $this->historiesRepository->watchHistoryStore($request);
    }

    public function getWatchHistory(Request $request) { // Dashboard
        return $this->historiesRepository->getWatchHistory($request);
    }
}

