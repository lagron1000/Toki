import { useState } from "react";
import InputBar from './InputBar';

function Message(msg) {
    msg = msg["msg"];
    if (msg.file != null) {
        var file = msg.file
        if (msg.fileType.startsWith("img")) {
            return (
                <div>
                    <img className='media' src={file}></img>
                    <div class="message-content">{msg.content}</div>
                    <div class="message-timestamp-left">{msg.time}</div>
                </div>
            )
        }
        else if (msg.fileType.startsWith("vid")) {
            return (
                <div>
                    <video className='media' src={file} controls></video>
                    <div class="message-content">{msg.content}</div>
                    <div class="message-timestamp-left">{msg.time}</div>
                </div>
            )
        }
        else if (msg.fileType.startsWith("audio")){
            return (
                <div>
                    <audio className='media' controls preload="auto">
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