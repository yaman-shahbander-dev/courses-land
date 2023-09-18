<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\AIChatsRepositoryInterface;

class AIChatController extends Controller
{
    private AIChatsRepositoryInterface $AIChatsRepository;

    public function __construct(AIChatsRepositoryInterface $AIChatsRepository) {
        $this->AIChatsRepository = $AIChatsRepository;
    }
    public function getUserChatBotMessages(Request $request) { // return all user messages with bot
        return $this->AIChatsRepository->getUserChatBotMessages($request);
    }

    public function storeSentMessageToBot(Request $request) { // stores user message and return data
        return $this->AIChatsRepository->storeSentMessageToBot($request);
    }
}
