
const MessagesService = {

    getMessageList: async function(id, signedId) {
        let res = await fetch(`http://localhost:5143/api/Contacts/${id}/messages?signedId=${signedId}`);
        if (res.status == 200) return await res.json();
    },

    addNewMessage: async function(id, content, signedId) {
        let msg = {
            content : content
        }
    
        try {
            await fetch(`http://localhost:5143/api/Contacts/${id}/messages?signedId=${signedId}`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(msg)
        });
        } catch (error) {
            console.log(error);
        }
    },

    getMessageById: async function(recId, msgId, signedId) {
        let res = await fetch(`http://localhost:5143​/api​/Contacts​/${recId}​/messages​/${msgId}?signedId=${signedId}`);
        if (res.status == 200) return  await res.json();
        else return null;
    }
};

export default MessagesService;