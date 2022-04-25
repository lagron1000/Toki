import './Message.css';
import { useState } from "react";
import InputBar from './InputBar';
// bootstrap flex
function Message(msg) {
    debugger

    msg = msg["msg"];
    // console.log(msg.file.type);
    if (msg.file != null) {
        var file = URL.createObjectURL(msg.file);
        if (msg.file.type.startsWith("image/")) {
            return (
                <div>
                    <img src={file}></img>
                    <div class="p-2 bd-highlight">{msg.content}</div>
                    <div class="p-2 bd-highlight">{msg.time}</div>
                </div>
            )
        }
        else if (msg.file.type.startsWith("video/")) {
            return (
                <div>
                    <video src={file}></video>
                    <div class="p-2 bd-highlight">{msg.content}</div>
                    <div class="p-2 bd-highlight">{msg.time}</div>
                </div>
            )
        }
    }

    else {
        return (
            <div>
                <div class="p-2 bd-highlight">{msg.content}</div>
                <div class="p-2 bd-highlight">{msg.time}</div>
            </div>
        );
    }
}

export default Message;