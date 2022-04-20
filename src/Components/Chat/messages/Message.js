import './Message.css';
import { useState } from "react";
import InputBar from './InputBar';
// bootstrap flex
function Message({ content, time }) {
    return (
        <div>
            <div class="p-2 bd-highlight">{content}</div>
            <div class="p-2 bd-highlight">{time}</div>
        </div>
    );
}

export default Message;