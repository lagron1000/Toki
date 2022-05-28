import { useState } from "react"
import AddFriend from "./AddFriend";

function UserBar(props) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <button className="btn btn-secondary mb-3" onClick={()=>{setShowPopup(true)}} >Add Contact</button>
            <AddFriend chooseChat={props.chooseChat} user={props.user} updateContacts={props.updateContacts}
            trigger={showPopup} setShowPopup={setShowPopup} connectionState={props.connectionState} ></AddFriend>
        </div>
    )
}

export default UserBar