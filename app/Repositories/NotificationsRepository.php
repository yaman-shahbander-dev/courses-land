<?php

namespace App\Repositories;

use App\Interfaces\NotificationsRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Notification;
use App\Models\User;

class NotificationsRepository implements NotificationsRepositoryInterface
{
    public function getAllNotifications()
    {
        $notifications = Notification::all();

        return $notifications;
    }

    public function NotificationExists(Request $request)
    {
        $notificationID = $request->notificationID;

        $operation = $request->operation;

        $notification = Notification::find($notificationID);

        if (empty($notification)) {
            return response()->json(['error' => 'Notification does not exist']);
        } elseif ($operation == 'delete') {
            $notification->delete();
            if ($request->value) {
                $notifications = Notification::all();
            } else {
                $value = $request->value;
                $notifications = Notification::where('notification_title', 'like', '%' . $value . '%')->orwhere('notification_description', 'like', '%' . $value . '%')->get();
            }

            return response()->json(['success' => 'Notification deleted successfully', 'notifications' => $notifications]);
        }
    }

    public function searchNotification(Request $request)
    {
        $value = $request->value;

        $notifications = Notification::where('notification_title', 'like', '%' . $value . '%')->orwhere('notification_description', 'like', '%' . $value . '%')->get();

        return response()->json(['success' => $notifications]);
    }

    public function createNotification(Request $request)
    {
        $title = $request->title;

        $description = $request->description;

        $notification = new Notification();
        $notification->notification_title = $title;
        $notification->notification_description = $description;
        $notification->save();

        $FirebaseTokens = User::pluck('fcm_token');

        $SERVER_API_KEY = 'AAAAGFZeFmY:APA91bGjwSo90juzemtoF7X0r7IylDLwm4TkNNrmlLSUt-5-WVbiJpVfO0he0kohnwRGYOeYRxHq9hvcKuQCG2xwNcENMdiOZ6XBqz58TB4AfukEreixNqYZNGu5eT4EVZmzTki93HpY';

        $data = [
            "registration_ids" => $FirebaseTokens,
            "notification" => [
                "title" => $title,
                "body" => $description,
            ]
        ];

        $dataString = json_encode($data);

        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);

        return response()->json(['success' => 'Notification has been created successfully!']);
    }

    public function sideBarNotifications() { // dashobard
        $notifications = Notification::all();
        return $notifications;
    }
}
