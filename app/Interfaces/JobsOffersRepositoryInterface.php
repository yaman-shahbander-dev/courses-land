<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface JobsOffersRepositoryInterface
{
    public function getJobsOffers(); // user interface

    public function getJobOfferDetails(Request $request); // user interface

    public function getJobsOffersPage(); // user interface

    public function getJobsOffersDashboard(Request $request); // return jobs offers dashboard

    public function JobOfferExists(Request $request); // check if offer exists [Dashboard]

    public function UpdateOfferInforamtion(Request $request); // Update offer [Dashboard]

    public function searchjobOffer(Request $request); // searching an offer [Dashboard]

    public function createJobOffer(Request $request); // Creatign an offer [Dashboard]

    public function getSearchedJobsData(Request $request); // user interface

    public function applyToJobOffer(Request $request); // user interface (applying to an offer)
}
