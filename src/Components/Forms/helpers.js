import {contactList, addCon} from "../../Data/ContactList";
 
const valName = (name) => {
    var valid = true;
    for (c in contactList) {
        if (c.name == name) valid = false;
    }
    return valid;
}

const valPass1 = (pass) => {
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return pattern.test(pass);
}

const valPass2 = (pass1, pass2) => {
    return pass1 == pass2;
}



const validate = (username, pass1, pass2, img) => {
    return valName(username) && valPass1(pass1) && valPass2(pass1, pass2);
}

const register = (name, user, pass, img) => {
    addCon(name, user, pass, img);
}
