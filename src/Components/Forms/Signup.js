import { useState, useEffect } from 'react';
import contactList from '../../Data/ContactList';
import './Form.css';
import * as helpers from './helpers';

function Signup(g) {

    var signInFunc = g["g"];
    const values = {
        id: '',
        fullName: '',
        img: '',
        user: '',
        pword: '',
        pword2: ''
    }
    
    const [formVals, setFormVals] =  useState(values)
    const [formErrors, setFormErrors] =  useState({});
    const [isSubmitted, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleSubmit();
        }
        // const {name, value} = event.target;
        // setFormVals({...formVals, [name]:value})
        else{
            formVals[event.target.name] = event.target.value
            setFormVals({...formVals, formVals})
        }
    }

    const handleImg = (e) => {
        var link = URL.createObjectURL(e.target.files[0])
        const {name, value} = e.target;
        formVals.img=link;
        setFormVals({...formVals, formVals});

    }
    
    const handleSubmit = (e) => {
        helpers.register(
            formVals["fullName"],
            formVals["user"],
            formVals["pword"],
            formVals["img"]
        )
        console.log(contactList);
        e.preventDefault();
        debugger;
        setFormErrors(helpers.isValid(formVals));
        setIsSubmit(true);
        if(Object.keys(formErrors).length===0) {
            debugger;
            
            signInFunc();
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
            <form id = "checkRequired">
            <div className="Form">
                <h3 className="display-6">Sign Up</h3>

                <div className="form-floating mb-3">
                    <input name='fullName' type={"text"} className="form-control floatingInput" placeholder="Name" 
                    value={formVals.fullName} onChange={handleChange} onKeyDown ={handleChange}></input>
                    <label htmlFor="floatingInput">Name</label>
                    <p className = "valErr"> {formErrors.fullName} </p>
                </div>
                
                <div className="form-floating mb-3">
                    <input name='user' type={"text"} className="form-control floatingInput" placeholder="Username" 
                    value={formVals.user} onChange={handleChange} onKeyDown ={handleChange}></input>
                    <label htmlFor="floatingInput">Username</label>
                    <p className = "valErr"> {formErrors.user} </p>
                </div>
                
                <div className="form-floating mb-3">
                    <input name='pword' value={formVals.pword} onChange={handleChange} onKeyDown ={handleChange} type="password" className="form-control floatingPassword" placeholder="Password" ></input>
                    <label htmlFor="floatingPassword">Password</label>
                    <p className = "valErr"> {formErrors.pword} </p>
                </div>

                <div className="form-floating mb-3  ">
                    <input name='pword2' value={formVals.pword2} onChange={handleChange} onKeyDown ={handleChange} type="password" className="form-control floatingPasswordCon" placeholder="Confirm Password"></input>
                    <label htmlFor="floatingPasswordCon">Confirm Password</label>
                    <p className = "valErr"> {formErrors.pword2} </p>
                </div>
                
                <div className="input-group mb-3">
                    <input name='img' onChange={handleImg} type="file" className="form-control inputGroupFile02"></input>
                    {/* <label className="input-group-text btn-primary" htmlFor="inputGroupFile02">Upload</label> */}
                    
                </div>
                <p className = "valErr"> {formErrors.img} </p>
                <div className="input-group mb-3">
                <a on class="btn btn-secondary sub" type="submit" onClick={handleSubmit} >Submit</a>
                </div>
                    <input type="submit" onClick={handleSubmit}></input>
                <a className="link" onClick={signInFunc}>Already have an account?</a>
            </div></form>
        </div>
    );
}

export default Signup;