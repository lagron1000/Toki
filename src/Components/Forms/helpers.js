import contactList from "../../Data/ContactList";

export function valName(name) {
    var valid = true;
    for (var c in contactList) {
        if (c.name == name) valid = false;
    }
    return valid;
}

export function valPass1(pass) {
    // var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    // return pattern.test(pass);
    return 1
}

export function valPass2(pass1, pass2) {
    return pass1 == pass2;
}



export function validate(username, pass1, pass2, img) {
    return valName(username) && valPass1(pass1) && valPass2(pass1, pass2);
}

export function register(name, user, pass, img) {
    var newId = contactList.length + 1;
    var con = {
        id: newId,
        name: name,
        img: img,
        user: user,
        pword: pass,
        chatHistory : []
    }
    contactList.push(con);
}
