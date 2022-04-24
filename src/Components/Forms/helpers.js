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
    // addCon(name, user, pass, img);
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
// export function passwordLength(pass) {

// }
export function isValid(values) {
    const regexName = /[a-zA-Z_]+/;
    const regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const errors = {};
    if(!values.fullName) {
        errors.fullName = "Name is required!"
    } else if(!regexName.test(values.pword)) {
        errors.fullName = "Must contain both uppercase and lowercase letters only, " +
        "and no longer than 25 characters!"
    }
    if(!values.user) {
        errors.user = "Username is required!"
    }
    if(!values.fullName) {
        errors.fullName = "Name is required!"
    }
    if(!values.pword) {
        errors.pword = "Password is required!"
    } else if(!regexPass.test(values.pword)) {
        errors.pword = "Must contain at least one number and one" +
        " uppercase and lowercase letter, and at least 8 or more characters!"
    }
    if(!values.pword2) {
        errors.pword2 = "Confirm password!"
    } else if(values.pword !== values.pword2) {
        errors.pword = "Must be the same password!"
    }
    if(!values.img) {
        errors.img = "Image is required!"
    }
    return errors;
}
