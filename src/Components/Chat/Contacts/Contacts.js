import contactList, { retCon } from "../../../Data/ContactList";
import cList from '../../../Data/Contacts.json';
import Contact from "./Contact";

function Contacts({ user, chooseChat }) {
    // function sumbitChat() {
    //     chooseChat(friend)
    // }

    var myCons = user.user.chatHistory;

    const elements = contactList.map((c, key) => {
    debugger

        // var name = Object.keys(c)[0];
        // var numOfMsgs = c[name].length;
        // var lastMsg = c[name][numOfMsgs - 1];
        // var friend = retCon(name);
        return (
            <div key={key} onClick={()=>{chooseChat(c)}}>
                {/* <Contact friend={friend} img={`./images/${friend.img}`} lastMsg={lastMsg} meObj={user} ></Contact> */}
                <Contact img={c.img} ></Contact>

            </div>
        )
    })



    return (
        <div className="sideBar">

            <div className="contactList">
                {elements}
            </div>
        </div>
    )
}

export default Contacts;