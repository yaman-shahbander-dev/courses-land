import axios from "axios";
import React, { useState, useEffect } from "react";
import css from './AiChatBot.module.css';
import { Link } from "react-router-dom";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getUserChatBotMessages', {
            params: {
                userID: userID
            }
        }).then((res) => setMessages(res.data));
    }, []);


    return (
        <div>
            <Link to={'/'}>
                <div className={css.menu}>
                    <div className={css.back}>
                        <i className="fa fa-chevron-left">
                        </i>
                    </div>
                </div>
            </Link>
            <ol className={css.chat}>
                {messages ?
                    messages.map((message, index) => (
                        <li key={index} className={message.class_name === 'self' ? css.self : css.other}>
                            <div className={css.avatar}>
                                <img
                                    src={message.is_bot === 0 ? message.avatar : "http://127.0.0.1:8000/images/bot.jpg"}
                                    draggable="false" />
                            </div>
                            <div className={css.msg} style={{ maxWidth: '370px' }}>
                                <p dangerouslySetInnerHTML={{ __html: message.text }} ></p>
                            </div>
                        </li>
                    ))
                    : null}
            </ol>
            <div className="form-group"
                style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* text area input */}
                <input type="text" id="name" className="form-control textarea"
                    placeholder="Type here!" style={{ color: 'black' }}
                    onChange={(e) => setMessage(e.target.value)} />

                {/* send button here */}
                <button onClick={() => {
                    if (message.length > 0) {
                        axios.post('http://127.0.0.1:8000/api/storeSentMessageToBot', {
                            userID: userID,
                            message: message,
                            type: 'self',
                            bot: 0,
                        }).then(() => {
                            setMessage('');
                            document.getElementById('name').value = ''
                            axios.get('http://localhost:8080/', {
                                params: { message: message }
                            }).then((res) => {
                                axios.post('http://127.0.0.1:8000/api/storeSentMessageToBot', {
                                    userID: userID,
                                    message: res.data,
                                    type: 'other',
                                    bot: 1,
                                }).then((res) => setMessages(res.data));
                            })
                        });
                    }
                }}
                    className="btn btn-primary">Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
