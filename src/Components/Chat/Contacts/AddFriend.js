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

    function search() {
        var friend = retCon(searchVar);
        if(!friend) {
            alert("User not found")
        }
        else {
            debugger
            var newChat = {}
            newChat[searchVar] = [];
            props.user.user.chatHistory.push(newChat);
            props.setShowPopup(false);
            var len = props.user.user.chatHistory.length;
            props.chooseChat(props.user.user.chatHistory[len-1]);
        }
    }


    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <label>Enter Username</label>
                <input value={searchVar} type={"text"} onChange={(e)=>{setSearchVer(e.target.value)}} onKeyDown={handleKey}></input>
                <button onClick={search}>Add</button>
                <br></br>
                <button onClick={()=>{props.setShowPopup(false)}}>Cancel</button>
            </div>
        </div>
    ) : "";


}

export default AddFriend;