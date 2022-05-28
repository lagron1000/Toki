import UserService from "../../../Services/UserService";
import cList from '../../../Data/Contacts.json';
import Contact from "./Contact";
import ContactService from "../../../Services/ContactService";
import { useEffect, useState } from "react";

function Contacts({ user, chooseChat, contactsState }) {
    // var myCons = user.user.chatHistory;d
    user = user.user;
    let myCons = user.contactList

    // const [chatState, setChat] = useState(currentChat);

    // useEffect(()=> {
    //     setChat(currentChat)
    //     if (chatState != null) console.log(chatState.myId)
    // })

    const elements = contactsState.map((friend, key) => {
        // var numOfMsgs = c.messages.length;
        // var lastMsg = c.messages[numOfMsgs - 1];
        return (
            <div key={key} onClick={() => { chooseChat(friend) }}>
                <Contact friend={friend} /*img={"public\images\TokiLogo.png"}*/ lastMsg={friend.lastmsg} meObj={user} ></Contact>
            </div>
        )
    })


    // if (currentChat != null) {
    //     return(
    //         <div className="sideBar overflow-auto">
    //         <p style={{display: "none"}}>{chatState.myId}</p>
    //         <div className="contactList">
    //             {elements}
    //         </div>
    //     </div>
    //     )
    // } else {
        return (
            <div className="sideBar overflow-auto">
                <div className="contactList">
                    {elements}
                </div>
            </div>
        )
    // }
    
}

export default Contacts;