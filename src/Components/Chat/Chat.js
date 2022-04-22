import { useState } from 'react';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import InputBar from './messages/InputBar';
import Messages from './messages/messages';
function Chat(user) {

    const [currentChat, chatStateSwitch] = useState(null);
    
    let lastChatState = null;
    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    function DisplayMessages() {
        if (currentChat == null) return <div></div>
        else return (
            <div className='messages'>
                {/* <Messages ch={user.user.chatHistory}></Messages> */}
                <Messages chat={currentChat} ></Messages>
                <div className='iBar'>
                    <InputBar></InputBar>
                </div>
            </div>
        )
    }

    return (
        <div>
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