import { useState } from 'react';
import './AddFriend.css';

function AddFriend(props) {

    const [searchVar, setSearchVer] = useState("");

    function handleKey(e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault();
            // handleSubmit();
            console.log(searchVar)
          }
    }


    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <input value={searchVar} type={"text"} onChange={(e)=>{setSearchVer(e.target.value)}} onKeyDown={handleKey}></input>
                <button>Add</button>
                <br></br>
                <button onClick={()=>{props.setShowPopup(false)}}>Cancel</button>
            </div>
        </div>
    ) : "";


}

export default AddFriend;