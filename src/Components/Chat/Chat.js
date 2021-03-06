import { useState } from 'react';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import Contact from './Contacts/Contact'
import InputBar from './messages/InputBar';
import Messages from './messages/Messages';
import { retCon } from '../../Data/ContactList';
import UserBar from './Contacts/UserBar';
function Chat(user) {

    const [currentChat, chatStateSwitch] = useState(null);

    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    function DisplayMessages() {
        if (currentChat == null) return <div></div>

        else return (
            <div className='messages'>
                <Messages user={currentChat} chooseChat={chooseChat} ></Messages>
            </div>
        )
    }

    function DisplayContact() {
        if (currentChat == null) return <div class="chat-with-s"> Glad to have you! 'Toki'-ing today?</div>
        else {
            var find =retCon(Object.keys(currentChat)[0]);
            return (
                <div class="chat-about">
                    <div class="chat-with">
                        <div> {find.name} ({find.user}) </div>
                        <img src={find.img} ></img>
                    </div>
                </div>
            )
        }
    }
    console.log(currentChat);
    return (
        <div className='chatWin'>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <UserBar user={user} chooseChat={chooseChat}></UserBar>
                    <Contacts user={user} chooseChat={chooseChat}></Contacts>
                </div>
                <div id='chat' class="column">
                    <nav>
                        <div class="chat-about">
                            <div class="chat-with">
                                <DisplayContact></DisplayContact>
                            </div>
                        </div>
                    </nav>
                    <div>
                        <DisplayMessages></DisplayMessages>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;