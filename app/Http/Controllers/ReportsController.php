<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\ReportsRepositoryInterface;

class ReportsController extends Controller
{
    private ReportsRepositoryInterface $ReportsRepository;

    public function __construct(ReportsRepositoryInterface $ReportsRepository) {
        $this->ReportsRepository = $ReportsRepository;
    }

    public function storeUserReport(Request $request) {
        return $this->ReportsRepository->storeUserReport($request);
    }

    public function getReports() {
        return $this->ReportsRepository->getReports();
    }

    public function reportExists(Request $request) {
        return $this->ReportsRepository->reportExists($request);
    }

    public function searchReport(Request $request) {
        return $this->ReportsRepository->searchReport($request);
    }
}
