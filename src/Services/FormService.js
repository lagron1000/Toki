// import UserService from "../../Services/UserService";

import UserService from "./UserService";

// let userList = await UserService.getUserList();



// export function valPass2(pass1, pass2) {
//     return pass1 == pass2;
// }



// export function validate(username, pass1, pass2, img) {
//     return valName(username) && valPass1(pass1) && valPass2(pass1, pass2);
// }

// export function register(name, user, pass, img) {
//     var newId = userList.length + 1;
//     var con = {
//         id: newId,
//         name: name,
//         img: img,
//         user: user,
//         pword: pass,
//         chatHistory : []
//     }
//     userList.push(con);
// }
// export function isEmpty(values) {
//     const errors = {};
//     if(!values.user) {
//         errors.user = "User is required!"
//     }
//     if(!values.pass) {
//         errors.pass = "Password is required!"
//     }
//     return errors;
// }


// export function isExist(values) {
//     const errors = {};
//     if (values === "user") {
//         errors.user = "User not found"
//     }
//     if (values === "password") {
//         errors.pass = "Password is incorrect!"
//     }
//     return errors;
// }
// export function isValid(values) {
//     const regexName = /^([a-zA-Z]+)( [a-zA-Z]+)$/;
//     const regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
//     const errors = {};
//     if(!values.fullName) {
//         errors.fullName = "Name is required!"
//     } else if(!regexName.test(values.fullName)) {
//         errors.fullName = "Must contain uppercase and lowercase letters only, " +
//         "and to be composed of two words with space in between!"
//     }
//     if(!values.user) {
//         errors.user = "Username is required!"
//     }
//     if(!values.fullName) {
//         errors.fullName = "Name is required!"
//     }
//     if(!values.pword) {
//         errors.pword = "Password is required!"
//     } else if(values.pword === "password") {
//         errors.pword = "Password can't be 'password!'"
//     } else if(!regexPass.test(values.pword)) {
//         errors.pword = "Must contain at least one number and one" +
//         " uppercase and lowercase letter, and at least 8 or more characters!"
//     }
//     if(!values.pword2) {
//         errors.pword2 = "Confirm password!"
//     } else if(values.pword !== values.pword2) {
//         errors.pword2 = "Must be the same password!"
//     }
//     // if(!values.img) {
//     //     errors.img = "Image is required!"
//     // }
//     return errors;
// }


const FormService = {
    valName : async function(name) {
        var valid = true;
        for (var c in await UserService.getUserList) {
            if (c.name == name) valid = false;
        }
        return valid;
    },

    valPass1 : function(pass) {
        // var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        // return pattern.test(pass);
        return 1
    },

    valPass2 : function(pass1, pass2) {
        return pass1 == pass2;
    },

    validate : function(username, pass1, pass2, img) {
        return this.valName(username) && this.valPass1(pass1) && this.valPass2(pass1, pass2);
    },

    isEmpty : function(values) {
        const errors = {};
        if(!values.user) {
            errors.user = "User is required!"
        }
        if(!values.pass) {
            errors.pass = "Password is required!"
        }
        return errors;
    },

    isExist : function(values) {
        const errors = {};
        if (values === "user") {
            errors.user = "User not found"
        }
        if (values === "password") {
            errors.pass = "Password is incorrect!"
        }
        return errors;
    },

    isValid : function(values) {
        const regexName = /^([a-zA-Z]+)( [a-zA-Z]+)$/;
        const regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        const errors = {};
        if(!values.fullName) {
            errors.fullName = "Name is required!"
        } else if(!regexName.test(values.fullName)) {
            errors.fullName = "Must contain uppercase and lowercase letters only, " +
            "and to be composed of two words with space in between!"
        }
        if(!values.user) {
            errors.user = "Username is required!"
        }
        if(!values.fullName) {
            errors.fullName = "Name is required!"
        }
        if(!values.pword) {
            errors.pword = "Password is required!"
        } else if(values.pword === "password") {
            errors.pword = "Password can't be 'password!'"
        } else if(!regexPass.test(values.pword)) {
            errors.pword = "Must contain at least one number and one" +
            " uppercase and lowercase letter, and at least 8 or more characters!"
        }
        if(!values.pword2) {
            errors.pword2 = "Confirm password!"
        } else if(values.pword !== values.pword2) {
            errors.pword2 = "Must be the same password!"
        }
        // if(!values.img) {
        //     errors.img = "Image is required!"
        // }
        return errors;
    }


}


export default FormService;


