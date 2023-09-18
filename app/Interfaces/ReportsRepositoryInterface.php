<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface ReportsRepositoryInterface {
    public function storeUserReport(Request $request); // user interefaace report
    public function getReports(); // Dashboard return all reports
    public function reportExists(Request $request); // dashboard for deleting the report
    public function searchReport(Request $request); // dashboard
}