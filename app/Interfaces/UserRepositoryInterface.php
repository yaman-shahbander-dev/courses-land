<?php

namespace App\Interfaces;
use App\Http\Requests\CreateUserRequest;
use Illuminate\Http\Request;

Interface UserRepositoryInterface {
    public function Register(CreateUserRequest $request);
    public function Login(Request $request);
    public function sendNotification($notificationTitle, $notificationBody, $FirebaseToken);
    public function Statistics();
    public function getActiveUsers(); // For dashboard
    public function increaseActiveUsers(); // For dashboard
    public function decreaseActiveUsers(); // For dashboard
    public function getAllUsers(); // For dashboard
    public function checkUserExistance(Request $request); // Search, delete, or edit user
    public function UpdateUserInforamtion(Request $request);
    public function searchUser(Request $request);
    public function getAuthorsRequests(); // Return all users requests to become authors
    public function AuthorRequestExists(Request $request); // Delete or approve becoming author request
    public function userProfileData(Request $request); // Return user data (username, picture)
    public function updateProfile(Request $request); // updating user profile
    public function getUserInfo(Request $request); // user info for Dashboard
    public function becomeAuthorAgentRequest(Request $request); // [Dashboard]
    public function hasAlreadyRequested(Request $request); // [Dashboard]
    public function getAgentsRequests(); // Return all users requests to become agents
    public function AgentRequestExists(Request $request); // Delete or approve becoming agent request
}
