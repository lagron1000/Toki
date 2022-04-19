import Message from "./Message";
function messages() {
    const elements = messageList.map((m, key) => {
         return <Message content={m.content} time={m.time} key={key} ></Message>
     })
    
    return (
        <div className="chat">
            <div className="messageList">
                {elements}
            </div>
        </div>
    )
}

export default messages;