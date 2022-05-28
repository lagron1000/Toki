const ServerComService = {

    sendInvitation: async function(from, to, toServer, fromServer) {
        let invitation = {
            from : from,
            to : to,
            server : fromServer
        }
    
        try {
            await fetch(`http://${toServer}/api/invitations`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(invitation)
        });
        } catch (error) {
            console.log(error);
        }
    },

    sendTransfer: async function(from, to, content ,server) {
        let msgTrans = {
            from : from,
            to : to,
            content : content
        }
    
        try {
            await fetch(`http://${server}/api/transfer`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(msgTrans)
        });
        } catch (error) {
            console.log(error);
        }
    },

    getUserFromServer: async function(id, server) {  //localhost:5143/api/Users/liron
        let userRes = await fetch(`http://${server}/api/Users/${id}`);
        if (userRes.status == 200) return  await userRes.json();
        else return null;
    }

};

export default ServerComService;