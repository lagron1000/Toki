import './Chat.css';
import Contacts from './Contacts/Contacts'
import SubmitButton from './messages/SubmitButton';
import Message from './messages/Message'
function Chat() {
    return (
        <div>
            <div class="row g-0 no-gutters">
                <div id='contacts' class="column">
                    <Contacts></Contacts>
                </div>

                <span id='chat' class="column"><Message></Message></span>
                
                    <div id='buttons' class="column">
                    <button type="button" class="btn btn-outline-warning bi bi-images">Warning</button>
                    
                    <button type="button" class="btn btn-outline-info">Info</button>
                    <button type="button" class="btn btn-outline-light">Light</button>
                    <button type="button" class="btn btn-outline-dark">Dark</button></div>
            </div> 
        </div>
    )
}

export default Chat;