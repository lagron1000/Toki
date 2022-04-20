import { useState } from 'react';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import InputBar from './messages/InputBar';
import Messages from './messages/messages';
function Chat(user) {

    const [currentChat, chatStateSwitch] = useState(null);

    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts user = {user} chooseChat = {chooseChat}></Contacts>
                </div>
                <div id='chat' class="column">
                    {/* <Messages ch={user.user.chatHistory}></Messages> */}
                    <div className='iBar'>
                        <InputBar></InputBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;