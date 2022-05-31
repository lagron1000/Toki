import './Form.css';
import { useState, useEffect } from 'react';
// import contactList from '../../Data/ContactList';
import signIn from '../Env/Env';
import Env from '../Env/Env';
import FormService from '../../Services/FormService';
import UserService from '../../Services/UserService';
// im

function Login({f, g}) {

    let contactList = [];

    var signInFunc = f;
    var signUpFunc = g;

    const values = {
        user: '',
        pass: ''
    }

    const [formVals, setFormVals] = useState(values)
    const [formErrors, setFormErrors] =  useState({});
    const [isSubmitted, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleSubmit();
        }
        else {
            const { name, value } = event.target;
            setFormVals({ ...formVals, [name]: value })
        }
    }
    
    const handleSubmit = async (e) => {

        contactList = await UserService.getUserList();

        console.log(contactList)
        var found = contactList.find((c)=> {
            if (c.id == formVals["user"]) return c;
        })
        if (found) {
            if (found.password == formVals["pass"]) {
                let usr = await UserService.getUserById(found.id);
                if (usr == null) {
                    signInFunc({
                        "id": "NOTFOUND",
                        "name": "NOTFOUND",
                        "contactList": []
                    })
                } else signInFunc(usr);
                
            }
            else {
                e.preventDefault();
                setFormErrors(FormService.isExist("password"));
                setIsSubmit(true);
            }
        }
        else {
            e.preventDefault();
            setFormErrors(FormService.isExist("user"));
            setIsSubmit(true);
        }
        if(formVals.pass==="" || formVals.user === "") {
            setFormErrors(FormService.isEmpty(formVals));
        }
    }
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmitted) {
            console.log(formVals);
        }
    },[formErrors]);

    return (
        <div className='FormContainer'>
            <div className="Form">
                <h3 className="display-6">Sign In</h3> 
                <div className="form-floating mb-3">
                    <input name='user' value={formVals.user} onChange={handleChange} onKeyDown ={handleChange}
                    type="text" className="form-control" id="floatingInput" placeholder="Username"></input>
                    <label htmlFor="floatingInput">Username</label>
                    <p className = "valErr"> {formErrors.user} </p>
                </div>

                <div className="form-floating mb-3">
                    <input name='pass' value={formVals.pass} onChange={handleChange} onKeyDown ={handleChange}
                    type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                    <p className = "valErr"> {formErrors.pass} </p>
                </div>

                <div className="input-group mb-3">
                <a on className="btn btn-success sub" href='https://localhost:7003' >Reviews</a>
                <a on className="btn btn-secondary sub" type="submit" onClick={handleSubmit} >Submit</a>

                </div>

                <a className="link" onClick={signUpFunc} >Don't have an account?</a>
            </div>
        </div>
    );
}

export default Login;