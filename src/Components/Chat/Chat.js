import './Chat.css';
import Contacts from './Contacts/Contacts'
import InputBar from './messages/InputBar';
import Messages from './messages/Messages';
import Message from './messages/Message'
function Chat(user) {
    debugger
    console.log(user.chatHistory)
    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts chatHistory = {user.chatHistory}></Contacts>
                </div>
                <div id='chat' class="column">
                    <Messages></Messages>
                    <div className='iBar'>
                        <InputBar></InputBar>
                    </div>
                </div>
                {/* <span id='inputBar' class="column">
                    <InputBar></InputBar>
                </span> */}
            </div>
        </div>
    )
}

export default Chat;