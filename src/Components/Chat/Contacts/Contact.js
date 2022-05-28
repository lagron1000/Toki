function Contact({ friend, lastMsg, meObj }) {

    const parseDate = (today) => {
        var now;
        if (today.getMinutes() < 10) {
          now = today.getHours() + ":0" + today.getMinutes()
        }
        else {
          now = today.getHours() + ":" + today.getMinutes()
        }
        return now;
      }

    var msgContent = lastMsg ? lastMsg.content : "";

    var msgSender
    if (lastMsg != null) msgSender = lastMsg.me ? meObj.user.name + ":" : friend.name + ":";
    else msgSender = ""
    var timeStamp = lastMsg ? parseDate(new Date(lastMsg.created)) : "";


    return (
        <div className="card table-hover contact">
            <p class="card-header mb-3" >{friend.name}</p>
            <div className="content">
                <img className="pfp mb-3" src="./images/TokiLogo.png"></img>
                <div className="cardText">
                <p >{msgSender}</p>
                <p className="msgCon">{msgContent}</p>
                <p>{timeStamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;