<?php

namespace App\Repositories;

use App\Interfaces\AIChatsRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\AIChat;

class AIChatsRepository implements AIChatsRepositoryInterface
{
    public function getUserChatBotMessages(Request $request) { // return all user messages with bot
        $user = User::find($request->userID);
        $messages = $user->AIChat;
        $messages = $messages->map(function($message) use($user) {
            $message->avatar = asset('images/Avatar') . '/' . $user->picture;
            return $message;
        });

        return $messages;
    }

    public function storeSentMessageToBot(Request $request) { // stores user message and return data
        $user = User::find($request->userID);
        $Message = $request->message;

        $message = new AIChat();
        $message->text = $Message;
        $message->class_name = $request->type;
        $message->is_bot = $request->bot;
        $message->user_id = $user->id;
        $message->created_at = now();
        $message->save();

        // $message->avatar = asset('images/Avatar') . '/' . $user->picture;

        $messages = $user->AIChat;
        $messages = $messages->map(function($message) use($user) {
            $message->avatar = asset('images/Avatar') . '/' . $user->picture;
            return $message;
        });

        return $messages;

    }
}
