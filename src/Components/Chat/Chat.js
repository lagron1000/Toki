import { useState } from 'react';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import InputBar from './messages/InputBar';
import Messages from './messages/Messages';
function Chat(user) {

    const [currentChat, chatStateSwitch] = useState(null);

    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    function DisplayMessages() {
        if (currentChat == null) return <div></div>
        else return (
            <div className='messages'>
                {/* <Messages ch={user.user.chatHistory}></Messages> */}
                <Messages user={currentChat} chooseChat={chooseChat} ></Messages>
                {/* <div className='iBar'>
                    <InputBar chat={currentChat} chooseChat={chooseChat}></InputBar>
                </div> */}
            </div>
        )
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts user={user} chooseChat={chooseChat}></Contacts>
                </div>
                <div id='chat' class="column">
                    <DisplayMessages></DisplayMessages>
                </div>
            </div>
        </div>
    )
}

export default Chat;