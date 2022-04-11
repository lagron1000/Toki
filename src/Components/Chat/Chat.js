import './Chat.css';
import Contacts from './Contacts/Contacts'
function Chat() {
    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts></Contacts>
                </div>
                <div id='chat' class="column">Chat</div>
            </div>
        </div>
    )
}

export default Chat;