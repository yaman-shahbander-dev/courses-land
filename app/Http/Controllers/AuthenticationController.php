<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\CreateUserRequest;
use App\Interfaces\UserRepositoryInterface;

class AuthenticationController extends Controller
{
    // This controller is used to register a new user or login an old one.
    // It's also used to check if either username or email is unqiue.

    private UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function Register(CreateUserRequest $request)
    {
        return $this->userRepository->Register($request);
    }

    public function Login(Request $request)
    {
        return $this->userRepository->Login($request);
    }

    public function sendNotification($notificationTitle, $notificationBody, $FirebaseToken) {
        return $this->userRepository->sendNotification($notificationTitle, $notificationBody, $FirebaseToken);
    }

    public function CheckUsername(Request $request)
    {
        $user = User::where('username', $request->Username)->first();
        if ($user != null) {
            return 'exist';
        }
        return true;
    }

    public function UniqueEmail(Request $request)
    {
        $user = User::where('email', $request->Email)->first();
        if ($user != null) {
            return 'exist';
        }
        return true;
    }
    public function Statistics() {
        return $this->userRepository->Statistics();
    }
    public function getActiveUsers() {
        return $this->userRepository->getActiveUsers();
    }
    public function increaseActiveUsers() {
        return $this->userRepository->increaseActiveUsers();
    }

    public function decreaseActiveUsers() {
        return $this->userRepository->decreaseActiveUsers();
    }

    public function getAllUsers() {
        return $this->userRepository->getAllUsers();
    }
    public function checkUserExistance(Request $request) {
        return $this->userRepository->checkUserExistance($request);
    }
    public function UpdateUserInforamtion(Request $request) {
        return $this->userRepository->UpdateUserInforamtion($request);
    }
    public function searchUser(Request $request) {
        return $this->userRepository->searchUser($request);
    }
    public function getAuthorsRequests() {
        return $this->userRepository->getAuthorsRequests();
    }
    public function AuthorRequestExists(Request $request) {
        return $this->userRepository->AuthorRequestExists($request);
    }
    public function userProfileData(Request $request) {
        return $this->userRepository->userProfileData($request);
    }
    public function updateProfile(Request $request) {
        return $this->userRepository->updateProfile($request);
    }
    public function getUserInfo(Request $request) {
        return $this->userRepository->getUserInfo($request);
    }
    public function becomeAuthorAgentRequest(Request $request) { // [Dashboard]
        return $this->userRepository->becomeAuthorAgentRequest($request);
    }
    public function hasAlreadyRequested(Request $request) { // [Dashboard]
        return $this->userRepository->hasAlreadyRequested($request);
    }
    public function getAgentsRequests() {
        return $this->userRepository->getAgentsRequests();
    }

    public function AgentRequestExists(Request $request) {
        return $this->userRepository->AgentRequestExists($request);
    }
}
