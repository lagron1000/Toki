import { useState } from 'react';
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
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormVals({...formVals, [name]:value})
    }

    const handleSubmit = () => {
        helpers.register(
            formVals["fullName"],
            formVals["user"],
            formVals["pword"],
            formVals["img"]
        )
        console.log(contactList);
        signInFunc()
    }

    return (
        <div className='FormContainer'>
            <div className="Form">
                <h3 className="display-6">Sign Up</h3>

                <div className="form-floating mb-3">
                    <input name='fullName' type={"text"} className="form-control floatingInput" placeholder="Name" 
                    value={formVals.fullName} onChange={handleChange}></input>
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input name='user' type={"text"} className="form-control floatingInput" placeholder="Username" 
                    value={formVals.user} onChange={handleChange}></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input name='pword' value={formVals.pword} onChange={handleChange} type="password" className="form-control floatingPassword" placeholder="Password" ></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3  ">
                    <input name='pword2' value={formVals.pword2} onChange={handleChange} type="password" className="form-control floatingPasswordCon" placeholder="Confirm Password"></input>
                    <label htmlFor="floatingPasswordCon">Confirm Password</label>
                </div>

                <div className="input-group mb-3">
                    <input name='img' value={formVals.img} onChange={handleChange} type="file" className="form-control inputGroupFile02"></input>
                    {/* <label className="input-group-text btn-primary" htmlFor="inputGroupFile02">Upload</label> */}
                </div>

                <div className="input-group mb-3">
                <a on class="btn btn-secondary sub" type="submit" onClick={handleSubmit} >Submit</a>
                </div>

                <a className="link" onClick={signInFunc}>Already have an account?</a>
            </div>
        </div>
    );
}

export default Signup;