import UserService from "../../../Services/UserService";
import cList from '../../../Data/Contacts.json';
import Contact from "./Contact";
import ContactService from "../../../Services/ContactService";

function Contacts({ user, chooseChat }) {
    // var myCons = user.user.chatHistory;d
    user = user.user;
    var myCons = user.contactList;

    const elements = myCons.map( async(friend, key) => {
        // var numOfMsgs = c.messages.length;
        // var lastMsg = c.messages[numOfMsgs - 1];
        return (
            <div key={key} onClick={()=>{chooseChat(friend)}}>
                <Contact friend={friend} /*img={"public\images\TokiLogo.png"} lastMsg={lastMsg}*/ meObj={user} ></Contact>
            </div>
        )
    })



    return (
        <div className="sideBar overflow-auto">

            <div className="contactList">
                {elements}
            </div>
        </div>
    )
}

export default Contacts;