import { useState } from 'react';
import ContactService from '../../../Services/ContactService';
import ServerComService from '../../../Services/ServerComService';
import UserService from '../../../Services/UserService';
import './AddFriend.css';

function AddFriend(props) {

    const [searchVar, setSearchVer] = useState("");
    const [nickState, setNick] = useState("");
    const [serverState, setServer] = useState("");

    let myId = props.user.user.id

    function handleKey(e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault();
            search();
        }
    }

    function foundCon(newC) {
        var found = null
        found = props.user.user.contactList.find((c) => {
            if (c.id == newC) return c;
        })
        return found;
    }

    async function search() {
        var friend = await ServerComService.getUserFromServer(searchVar, serverState);
        if (!friend) {
            alert("User not found")
        }
        else {
            var didFind = foundCon(searchVar)
            if (didFind == null) {
                await ServerComService.sendInvitation(myId, friend.id, serverState, props.user.user.server);
                await ContactService.addNewContact(friend.id, nickState, serverState, myId);
                props.setShowPopup(false);
                var newChat = await ContactService.getContactById(friend.id, myId);
                props.chooseChat(newChat);
                props.updateContacts();
                props.connectionState.invoke("SendInvite", friend.id);
            } else {
                props.setShowPopup(false);
                props.chooseChat(didFind);
            }
        }
    }


    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <label>Enter Username</label>
                <input value={searchVar} type={"text"} onChange={(e) => { setSearchVer(e.target.value) }} onKeyDown={handleKey}></input>
                <br></br>
                <label>Enter Nickname</label>
                <input value={nickState} type={"text"} onChange={(e) => { setNick(e.target.value) }} onKeyDown={handleKey}></input>
                <br></br>
                
                <label>Enter Server</label>
                <input value={serverState} placeholder={"localhost:xxxx"} type={"text"} onChange={(e) => { setServer(e.target.value) }} onKeyDown={handleKey}></input>
                <br></br>


                <button onClick={search}>Add</button>
                <br></br>
                <button onClick={() => { props.setShowPopup(false) }}>Cancel</button>
            </div>
        </div>
    ) : "";


}

export default AddFriend;