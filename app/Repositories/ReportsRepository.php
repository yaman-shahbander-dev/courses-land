<?php

namespace App\Repositories;

use App\Interfaces\ReportsRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Report;

class ReportsRepository implements ReportsRepositoryInterface
{
    public function storeUserReport(Request $request)
    {
        $title = $request->problemTitle; // getting problem title
        $description = $request->problemDescription; // getting problem description

        $report = new Report();
        $report->problem_title = $title;
        $report->problem_description = $description;
        $report->user_id = $request->userID;

        $report->save(); // saving the problem in DB
        return response()->json(['success' => 'Report has been sent successfully!']);
    }

    public function getReports()
    {
        $reports = Report::all(['id', 'problem_title', 'problem_description', 'user_id']);

        $reports = $reports->map(function ($report) {
            $report->user_id = $report->user->username;
            return $report;
        });

        return $reports->makeHidden('user');
    }

    public function reportExists(Request $request)
    {
        $reportID = $request->reportID;

        $operation = $request->operation;

        $report = Report::find($reportID);

        if (empty($report)) {
            return response()->json(['error' => 'Report does not exist']);
        } elseif ($operation == 'delete') {
            $report->delete();
            if ($request->value == '') {
                $reports = Report::all(['id', 'problem_title', 'problem_description', 'user_id']);
                $reports = $reports->map(function ($report) {
                    $report->user_id = $report->user->username;
                    return $report;
                });
            } else {
                $value = $request->value;
                $reports = Report::where('problem_title', 'like', '%' . $value . '%')
                ->orwhere('problem_description', 'like', '%' . $value . '%')
                ->get(['id', 'problem_title', 'problem_description', 'user_id']);
                $reports = $reports->map(function ($report) {
                    $report->user_id = $report->user->username;
                    return $report;
                });
            }

            return response()->json(['success' => 'Report deleted successfully', 'reports' => $reports]);
        }
    }

    public function searchReport(Request $request)
    {
        $value = $request->value;

        $reports = Report::where('problem_title', 'like', '%' . $value . '%')
        ->orwhere('problem_description', 'like', '%' . $value . '%')
        ->get(['id', 'problem_title', 'problem_description', 'user_id']);

        $reports = $reports->map(function ($report) {
            $report->user_id = $report->user->username;
            return $report;
        });

        return response()->json(['success' => $reports->makeHidden('user')]);
    }
}
