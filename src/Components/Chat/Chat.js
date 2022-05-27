import { useState } from 'react';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import Contact from './Contacts/Contact'
import InputBar from './messages/InputBar';
import Messages from './messages/Messages';
import UserService from '../../Services/UserService';
import UserBar from './Contacts/UserBar';
function Chat(user) {

    const [currentChat, chatStateSwitch] = useState(null);

    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    function DisplayMessages() {
        debugger;

        if (currentChat == null) return <div></div>

        else return (
            <div className='messages'>
                <Messages user={currentChat} chooseChat={chooseChat} ></Messages>
            </div>
        )
    }

    async function DisplayContact() {
        debugger;

        if (currentChat == null) return <div class="chat-with-s"> Glad to have you! 'Toki'-ing today?</div>
        else {
            debugger;
            var find = await UserService.getUserById(Object.keys(currentChat)[0]);
            return (
                <div class="chat-about">
                    <div class="chat-with">
                        <div> {find.name} ({find.id}) </div>
                        <img src="public\images\TokiLogo.png" ></img>
                    </div>
                </div>
            )
        }
    }

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