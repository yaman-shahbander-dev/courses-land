<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface NotificationsRepositoryInterface {
    public function getAllNotifications(); // getting all notifications (Dashboard)
    public function NotificationExists(Request $request); // Dashboard (delete)
    public function searchNotification(Request $request); // dashobard
    public function createNotification(Request $request); // dashobard
    public function sideBarNotifications(); // dashobard
}
