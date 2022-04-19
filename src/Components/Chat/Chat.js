import './Chat.css';
import Contacts from './Contacts/Contacts'
import InputBar from './messages/InputBar';
import Messages from './messages/messages';
function Chat(user) {
        console.log(user)
    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts ch = {user.user.chatHistory}></Contacts>
                </div>
                <div id='chat' class="column">
                    <Messages ch={user.user.chatHistory}></Messages>
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