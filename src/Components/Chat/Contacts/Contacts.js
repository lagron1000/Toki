import contactList, { retCon } from "../../../Data/ContactList";
import cList from '../../../Data/Contacts.json';
import Contact from "./Contact";

function Contacts(user) {
    // const Elements = () => {
    //     debugger
    //     var myCons = ch.ch;
    //     for (var i in myCons) {
    //         debugger
    //         // console.log(myCons[i]);
    //         var name = Object.keys(myCons[i]);
    //         var numOfMsgs = myCons[i][name].length;
    //         var lastMsg = myCons[i][name][numOfMsgs - 1];
    //         return <Contact name={name} ></Contact>
    //     }
    // }
    var myCons = user.user.user.chatHistory;

    const elements = myCons.map((c, key) => {
        var name = Object.keys(c)[0];
        var numOfMsgs = c[name].length;
        var lastMsg = c[name][numOfMsgs - 1];
        var friend = retCon(name);
        return <Contact friend={friend} img={`./images/${friend.img}`} lastMsg={lastMsg} meObj={user} key={key}></Contact>

        // if(contactList.find(c.user)) {
        //     return <Contact name={c.name} img={`./images/${c.img}`} key={key} ></Contact>
        // }
    })
// console.log(ch)
    return (
        <div className="sideBar">
            
            <div className="contactList">
                {elements}
                {/* <Elements></Elements> */}
            </div>
        </div>
    )
}

export default Contacts;