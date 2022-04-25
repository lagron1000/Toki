import { useState } from "react";
import { retCon } from "../../../Data/ContactList";
import InputBar from "./InputBar";
import Message from "./Message";

function Messages({user, chooseChat}) {

    var msgTemplate = { content: "", time: "", me: true };
    var friendName = Object.keys(user)[0];
    var friend = retCon(friendName);
    var ch = user[friendName];
    console.log(user);

    const [currentUser, setNewUser] = useState(false);

    
    const changeUser = () => {
        setNewUser(!currentUser);
    }

    const elements = ch.map((m, key) => {
        console.log(m)
        if (m.me) {
            return (
                <div className="chat">
                    <Message content={m.content} time={m.time} key={key} isMe={true} ></Message>
                </div>
            )
        }
        else
            return (
                <div className="chat">
                    <Message content={m.content} time={m.time} key={key} isMe={false}></Message>
                </div>
            )
    })

    console.log(user)
    return (
        <div className="chat">
            <div className="messageList">
            <div class="scroller">
                {elements}
                </div>
                <div className='iBar'>
                    <InputBar chat={user} chooseChat={chooseChat} changeUser={changeUser}></InputBar>
                </div>
            </div>
        </div>
    )
}

export default Messages;