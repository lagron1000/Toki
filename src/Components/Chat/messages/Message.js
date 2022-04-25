import './Message.css';
import { useState } from "react";
import InputBar from './InputBar';
// bootstrap flex
function Message({ content, time, isMe }) {
    debugger;
    if(isMe) {
        debugger;
       return (
            <div class="chat">
                 <div class="message-blue">
                        <p class="message-content">{content}</p>
                        <div class="message-timestamp-left">{time}</div>
                    </div>
            </div>
        );
    }
    else {
        return (
            <div class="chat"><div class="message-orange">
                        <p class="message-content">{content}</p>
                        <div class="message-timestamp-right">{time}</div>
                    </div>
                    
                </div>
        );
    }
}

export default Message;