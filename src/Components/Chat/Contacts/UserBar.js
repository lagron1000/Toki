import { useState } from "react"
import AddFriend from "./AddFriend";

function UserBar() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <button onClick={()=>{setShowPopup(true)}} >Add Contact</button>
            <AddFriend trigger={showPopup} setShowPopup={setShowPopup} ></AddFriend>
            <input type={"text"}></input>
        </div>
    )
}

export default UserBar