const ContactService = {
    getContactList: async function(signedId) {
        let res = await fetch(`http://localhost:5143/api/Contacts?signedId=${signedId}`);
        if (res.status == 200) return await res.json();
    },

    addNewContact: async function(id, name, server, signedId) {
        let contact = {
            id : id,
            name : name,
            server : server
        }
    
        try {
            await fetch(`http://localhost:5143/api/Contacts/${id}?signedId=${signedId}`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(contact)
        });
        } catch (error) {
            console.log(error);
        }
    },

    getContactById: async function(id, signedId) {
        let res = await fetch(`http://localhost:5143/api/Contacts/${id}?signedId=${signedId}`);
        if (res.status == 200) return  await res.json();
        else return null;
    }
};

export default ContactService;