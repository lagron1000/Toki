import contactList from "../../../Data/ContactList";
import Contact from "./Contact";

function Contacts() {
    //test
    const elements = contactList.map((c, key) => {
        return <Contact name={c.name} img={`./images/${c.img}`} key={key} ></Contact>
    })

    return (
        <div className="sideBar">
            
            <div className="contactList">
                {elements}
            </div>
        </div>
    )
}

export default Contacts;