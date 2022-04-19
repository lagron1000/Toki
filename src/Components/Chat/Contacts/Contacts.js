import contactList from "../../../Data/ContactList";
import cList from '../../../Data/Contacts.json';
import Contact from "./Contact";

function Contacts(ch) {
    debugger
    const elements = () => {
        for (var c in ch) {
            console.log(c);
        }
    }
    // const elements = ch.map((c, key) => {
    //     debugger

    //     if(contactList.find(c.user)) {
    //         return <Contact name={c.name} img={`./images/${c.img}`} key={key} ></Contact>
    //     }
    // })
console.log(ch)
    return (
        <div className="sideBar">
            
            <div className="contactList">
                {/* {elements} */}
            </div>
        </div>
    )
}

export default Contacts;