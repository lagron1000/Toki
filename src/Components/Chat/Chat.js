import './Chat.css';
import Contacts from './Contacts/Contacts'
import InputBar from './messages/InputBar';
import Messages from './messages/messages';
function Chat(user) {
    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts></Contacts>
                </div>
                <div id='chat' class="column">
                    <Messages chatHistory={user.chatHistory}></Messages>
                    <div className='iBar'>
                        <InputBar></InputBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;