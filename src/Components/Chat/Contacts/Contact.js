function Contact({ friend, meObj }) {

    debugger;
    var lastMsg = null;

    var msgContent = lastMsg ? lastMsg.content : "";

    var msgSender
    if (lastMsg != null) msgSender = lastMsg.me ? meObj.user.name + ":" : friend.name + ":";
    else msgSender = ""

    var timeStamp = lastMsg ? lastMsg.time : "";


    return (
        <div className="card table-hover contact">
            <p class="card-header mb-3" >{friend.name}</p>
            <div className="content">
                <img className="pfp mb-3" src="public\images\TokiLogo.png"></img>
                <p className="cardText">{msgSender} {msgContent} {timeStamp}</p>
            </div>
        </div>
    )
}

export default Contact;