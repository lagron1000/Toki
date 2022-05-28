import { useRef, useEffect, useState } from "react";
import InputBar from "./InputBar";
import Message from "./Message";

function Messages({ user, chooseChat, updateContacts, connectionState }) {

    // var msgTemplate = { content: "", time: "", me: true };
    // var friendName = Object.keys(user)[0];
    // var friend = await UserService.getUserById(friendName);
    // var ch = user[friendName];
    // console.log(user);

    const [currentUser, setNewUser] = useState(false);


    const changeUser = () => {
        setNewUser(!currentUser);
    }


    const divRef = useRef(null)      
        useEffect(() => {
          divRef.current.scrollIntoView();
        });

    const elements = user.messages.map((m, key) => {
        if (m.sent) {
            return (
                <div className="message-blue msg">
                    <Message msg={m} key={key} ></Message>
                </div>
            )
        }
        else
            return (
                <div className="message-orange msg">
                    <Message msg={m} key={key} ></Message>
                </div>
            )
    })
    return (
        <div className="chat">
            <div className="messageList">
                <div class="scroller overflow-auto">
                    {elements}
                    <div ref={divRef}></div>
                </div>
                <div class = "nav justify-content-center">
                <div className='iBar'>
                    <InputBar chat={user} chooseChat={chooseChat}
                     changeUser={changeUser} updateContacts={updateContacts} connectionState={connectionState}></InputBar>
                </div></div>
            </div>

        </div>
    )
}

export default Messages;