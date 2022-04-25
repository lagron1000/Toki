import { useState } from 'react';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import Contact from './Contacts/Contact'
import InputBar from './messages/InputBar';
import Messages from './messages/Messages';
import { retCon } from '../../Data/ContactList';
function Chat(user) {
    debugger

    const [currentChat, chatStateSwitch] = useState(null);

    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    function DisplayMessages() {debugger;
        if (currentChat == null) return <div></div>
        
        else return (
            <div className='messages'>
                {/* <div class="container"> */}
                {/* <Messages ch={user.user.chatHistory}></Messages> */}
                <Messages user={currentChat} chooseChat={chooseChat} ></Messages>
                {/* <div className='iBar'>
                    <InputBar chat={currentChat} chooseChat={chooseChat}></InputBar>
                </div> */}</div>
            // </div>
        )
    }
    
        function DisplayContact() {
        debugger;
        
        if (currentChat == null) return <div class = "chat-with-s"> Glad to have you! 'Toki'-ing today?</div>
        else {
            // var find =retCon(Object.keys(currentChat)[0]).name;
            return (
                <div class="chat-about">
                    <div class="chat-with">
                        <div> {retCon(Object.keys(currentChat)[0]).name} </div>
                        <img src={retCon(Object.keys(currentChat)[0]).img} ></img>
                    </div>
                </div>
        )
            }
    }
    console.log(currentChat);
    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts user={user} chooseChat={chooseChat}></Contacts>
                </div>
                <div id='chat' class="column">
                {/* {Object.keys(currentChat)[0]} */}
                <nav>
                    <div class="chat-about">
                        <div class="chat-with">
                        <DisplayContact></DisplayContact>
                            </div>
                        {/* <div class="chat-num-messages"> {Object.keys(currentChat)[0]} </div> */}
                    </div></nav>
                    <div>
                    <DisplayMessages></DisplayMessages>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Chat;