<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\JobsOffersRepositoryInterface;

class JobsOffersController extends Controller
{
    private JobsOffersRepositoryInterface $JobsOffersRepository;

    public function __construct(JobsOffersRepositoryInterface $JobsOffersRepository) {
        $this->JobsOffersRepository = $JobsOffersRepository;
    }

    public function getJobsOffers(){ // user interface
        return $this->JobsOffersRepository->getJobsOffers();
    }

    public function getJobOfferDetails(Request $request) { // user interface
        return $this->JobsOffersRepository->getJobOfferDetails($request);
    }

    public function getJobsOffersPage() { // user interface
        return $this->JobsOffersRepository->getJobsOffersPage();
    }

    public function getJobsOffersDashboard(Request $request) { // dashboard
        return $this->JobsOffersRepository->getJobsOffersDashboard($request);
    }

    public function JobOfferExists(Request $request) { // dashboard
        return $this->JobsOffersRepository->JobOfferExists($request);
    }

    public function UpdateOfferInforamtion(Request $request) {
        return $this->JobsOffersRepository->UpdateOfferInforamtion($request);
    }

    public function searchjobOffer(Request $request) {
        return $this->JobsOffersRepository->searchjobOffer($request);
    }

    public function createJobOffer(Request $request) {
        return $this->JobsOffersRepository->createJobOffer($request);
    }

    public function getSearchedJobsData(Request $request) { // user interface
        return $this->JobsOffersRepository->getSearchedJobsData($request);
    }

    public function applyToJobOffer(Request $request) { // user interface (applying to an offer)
        return $this->JobsOffersRepository->applyToJobOffer($request);
    }
}
