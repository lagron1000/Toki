import { useState } from 'react';
import { retCon } from '../../../Data/ContactList';
import './AddFriend.css';

function AddFriend(props) {

    const [searchVar, setSearchVer] = useState("");

    function handleKey(e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault();
            search();
        }
    }

    function foundCon(newC) {
        var found = null
        found = props.user.user.chatHistory.find((c) => {
            if (Object.keys(c)[0] == newC) return c;
        })
        return found;
    }

    function search() {
        var friend = retCon(searchVar);
        if (!friend) {
            alert("User not found")
        }
        else {
            var didFind = foundCon(searchVar)
            if (didFind == null) {
                var newChat = {}
                newChat[searchVar] = [];
                props.user.user.chatHistory.push(newChat);
                props.setShowPopup(false);
                var len = props.user.user.chatHistory.length;
                props.chooseChat(props.user.user.chatHistory[len - 1]);
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
                <button onClick={search}>Add</button>
                <br></br>
                <button onClick={() => { props.setShowPopup(false) }}>Cancel</button>
            </div>
        </div>
    ) : "";


}

export default AddFriend;