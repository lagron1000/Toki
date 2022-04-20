import { retCon } from "../../../Data/ContactList";
import Message from "./Message";

function messages(user) {
    user = user["chat"];
    var friendName = Object.keys(user)[0]
    var friend = retCon(friendName)
    var ch = user[friendName];
    console.log(user)

    const elements = ch.map((m, key) => {
        debugger
        console.log(m)
        if (m.me) {
            return (
                <div className="me">
                    <Message content={m.content} time={m.time} key={key} ></Message>
                </div>
            )
        }
        else
            return (
                <div className="notMe">
                    <Message content={m.content} time={m.time} key={key} ></Message>
                </div>            )
    })

    console.log(user)
    return (
        <div className="chat">
            <div className="messageList">
                {elements}
            </div>
        </div>
    )
}

export default messages;