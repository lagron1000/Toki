import { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import './Chat.css';
import Contacts from './Contacts/Contacts'
import Contact from './Contacts/Contact'
import InputBar from './messages/InputBar';
import Messages from './messages/Messages';
import UserService from '../../Services/UserService';
import UserBar from './Contacts/UserBar';
import ContactService from '../../Services/ContactService';

function Chat(user) {
    const [currentChat, chatStateSwitch] = useState(null);
    const [contactsState, setContacts] = useState(user.user.contactList);
    
    const [connectionState, setConnection] = useState(null);

    useEffect(() => {
      const newConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:5143/hubs/chat")
      .withAutomaticReconnect()
      .build();
      
      setConnection(newConnection);
    }, [])

    useEffect(()=> {
        if (connectionState != null) {
            connectionState.start()
            .then(() => {
                connectionState.on("RecieveMessage", async (srcId, destId) => {
                    if (destId == user.user.id) {
                        let newChat = await ContactService.getContactById(srcId, destId);
                        chatStateSwitch(newChat);
                        updateContacts();
                    }
                });
    
                connectionState.on("RecieveInvite", (destId) => {
                    if (destId == user.user.id) {
                        updateContacts();
                    }
                })
            }).catch((e) => {console.log(`Connections failed: ${e}`)})

        }
    }, [connectionState]);


    const chooseChat = (chat) => {
        chatStateSwitch(chat)
    }

    const updateContacts = async () => {
        let contacts = await ContactService.getContactList(user.user.id);
        setContacts(contacts);
    }


    function DisplayMessages() {
        if (currentChat == null) return <div></div>

        else return (
            <div className='messages'>
                <Messages user={currentChat} chooseChat={chooseChat}
                 updateContacts={updateContacts} connectionState={connectionState} ></Messages>
            </div>
        )
    }

    function DisplayContact() {
        if (currentChat == null) return <div class="chat-with-s"> Glad to have you! 'Toki'-ing today?</div>
        else {
            return (
                <div class="chat-about">
                    <div class="chat-with">
                        <div> {currentChat.name} ({currentChat.id}) </div>
                        <img src="./images/TokiLogo.png" ></img>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='chatWin'>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <UserBar user={user} chooseChat={chooseChat} connectionState={connectionState} updateContacts={updateContacts}></UserBar>
                    <Contacts user={user} chooseChat={chooseChat} contactsState={contactsState} ></Contacts>
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