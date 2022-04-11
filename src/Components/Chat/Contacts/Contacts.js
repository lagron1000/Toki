import contactList from "../../../Data/ContactList";
import Contact from "./Contact";

function Contacts() {

    const elements = contactList.map((c, key) => {
        debugger;
        return <Contact name={c.name} img={'../../../Data/' + c.img} key={key} ></Contact>

    })

    return (
        <div className="sideBar">
            
            <div className="contactList">
                {elements}
            </div>
        </div>
    )
}

export default Contacts