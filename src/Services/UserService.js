const UserService = {
    getUserList: async function() {
        let res = await fetch("http://localhost:5143/api/Users");
        if (res.status == 200) return await res.json();
    },

    addNewUser: async function(id, name, password) {
        let user = {
            id : id,
            name : name,
            password : password
        }
    
        try {
            await fetch("http://localhost:5143/api/Users", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        });
        } catch (error) {
            console.log(error);
        }
    },

    getUserById: async function(id) {
        let userRes = await fetch("http://localhost:5143/api/Users/" + id);
        if (userRes.status == 200) return  await userRes.json();
        else return null;
    }


};

export default UserService;


