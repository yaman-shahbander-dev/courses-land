<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\NotificationsRepositoryInterface;

class NotificationsController extends Controller
{
    private NotificationsRepositoryInterface $NotificationsRepository;

    public function __construct(NotificationsRepositoryInterface $NotificationsRepository) {
        $this->NotificationsRepository = $NotificationsRepository;
    }

    public function getAllNotifications() {
        return $this->NotificationsRepository->getAllNotifications();
    }

    public function NotificationExists(Request $request) {
        return $this->NotificationsRepository->NotificationExists($request);
    }

    public function searchNotification(Request $request) {
        return $this->NotificationsRepository->searchNotification($request);
    }

    public function createNotification(Request $request) {
        return $this->NotificationsRepository->createNotification($request);
    }

    public function sideBarNotifications() { // dashobard
        return $this->NotificationsRepository->sideBarNotifications();
    }
}
