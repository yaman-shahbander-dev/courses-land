<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface AIChatsRepositoryInterface {
    public function getUserChatBotMessages(Request $request); // return all user messages with bot
    public function storeSentMessageToBot(Request $request); // stores user message and return data
}
