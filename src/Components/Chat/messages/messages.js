import Message from "./Message";

function messages(chatHistory) {

    debugger
    // const elements = chatHistory.map((m, key) => {
    //     debugger
    //      return <Message content={m.content} time={m.time} key={key} ></Message>
    //  })
    
    return (
        <div className="chat">
            <div className="messageList">
                {/* {elements} */}
            </div>
        </div>
    )
}

export default messages;