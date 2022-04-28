import './Message.css';
import { useState } from "react";
import InputBar from './InputBar';

function Message(msg) {

    msg = msg["msg"];
    if (msg.file != null) {
        var file = URL.createObjectURL(msg.file);
        if (msg.file.type.startsWith("image/")) {
            return (
                <div>
                    <img src={file}></img>
                    <div class="message-content">{msg.content}</div>
                    <div class="message-timestamp-left">{msg.time}</div>
                </div>
            )
        }
        else if (msg.file.type.startsWith("video/")) {
            return (
                <div>
                    <video src={file} controls></video>
                    <div class="message-content">{msg.content}</div>
                    <div class="message-timestamp-left">{msg.time}</div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <audio controls preload="auto">
                        <source src={file}></source>
                    </audio>
                    <div class="message-content">{msg.content}</div>
                    <div class="message-timestamp-left">{msg.time}</div>
                </div>
            )
        }
    }

    else {
        return (
            <div>
                <div class="message-content">{msg.content}</div>
                <div class="message-timestamp-left">{msg.time}</div>
            </div>
        );
    }
}

export default Message;