import { useState, useEffect } from 'react';
import contactList from '../../Data/ContactList';
import './Form.css';
import * as helpers from './helpers';

function Signup(g) {

    var signInFunc = g["g"];
    // const form = document.getElementById('form')
    // form.addEventListener("submit", (event) => {

        // helpers.register(
        //     formVals["fullName"],
        //     formVals["user"],
        //     formVals["pword"],
        //     formVals["img"]
        // )
        // console.log(contactList);
        // // event.preventDefault;
        // if (checkInputs()) {
        //    signInFunc() 
        // }
    // })
    const values = {
        id: '',
        fullName: '',
        img: '',
        user: '',
        pword: '',
        pword2: ''
    }
    
    const [formVals, setFormVals] =  useState(values)
<<<<<<< HEAD
    const [formErrors, setFormErrors] =  useState({});
    const [isSubmitted, setIsSubmit] = useState(false);

=======
    
>>>>>>> 18c18ffb587c6b0257214d24798e9b7fd5ba3836
    const handleChange = (event) => {
        debugger
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
        debugger
        var link = URL.createObjectURL(e.target.files[0])
        const {name, value} = e.target;
        formVals.img=link;
        setFormVals({...formVals, formVals});

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(helpers.isValid(formVals));
        setIsSubmit(true);

        //   helpers.register(
        //     formVals["fullName"],
        //     formVals["user"],
        //     formVals["pword"],
        //     formVals["img"]
        // )
        // console.log(contactList);
        // debugger;
        // // event.preventDefault;
        // // if (checkIfValid()) {
        // //     debugger;
        //    signInFunc() 
        // }
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
<<<<<<< HEAD
                    value={formVals.fullName} onChange={handleChange} required></input>
=======
                    value={formVals.fullName} onChange={handleChange} onKeyDown ={handleChange}></input>
>>>>>>> 18c18ffb587c6b0257214d24798e9b7fd5ba3836
                    <label htmlFor="floatingInput">Name</label>
                    <p className = "valErr"> {formErrors.fullName} </p>
                </div>
                
                <div className="form-floating mb-3">
                    <input name='user' type={"text"} className="form-control floatingInput" placeholder="Username" 
<<<<<<< HEAD
                    value={formVals.user} onChange={handleChange} required></input>
=======
                    value={formVals.user} onChange={handleChange} onKeyDown ={handleChange}></input>
>>>>>>> 18c18ffb587c6b0257214d24798e9b7fd5ba3836
                    <label htmlFor="floatingInput">Username</label>
                    <p className = "valErr"> {formErrors.user} </p>
                </div>
                
                <div className="form-floating mb-3">
<<<<<<< HEAD
                    <input name='pword' value={formVals.pword} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"onChange={handleChange} type="password" className="form-control floatingPassword" placeholder="Password" required></input>
=======
                    <input name='pword' value={formVals.pword} onChange={handleChange} onKeyDown ={handleChange} type="password" className="form-control floatingPassword" placeholder="Password" ></input>
>>>>>>> 18c18ffb587c6b0257214d24798e9b7fd5ba3836
                    <label htmlFor="floatingPassword">Password</label>
                    <p className = "valErr"> {formErrors.pword} </p>
                </div>
<<<<<<< HEAD
                
                <div className="form-floating mb-3">
                    <input name='pword2' value={formVals.pword2} onChange={handleChange} type="password" className="form-control floatingPasswordCon" placeholder="Confirm Password" required></input>
=======

                <div className="form-floating mb-3  ">
                    <input name='pword2' value={formVals.pword2} onChange={handleChange} onKeyDown ={handleChange} type="password" className="form-control floatingPasswordCon" placeholder="Confirm Password"></input>
>>>>>>> 18c18ffb587c6b0257214d24798e9b7fd5ba3836
                    <label htmlFor="floatingPasswordCon">Confirm Password</label>
                    <p className = "valErr"> {formErrors.pword2} </p>
                </div>
                
                <div className="input-group mb-3">
<<<<<<< HEAD
                    <input name='img' value={formVals.img} onChange={handleChange} type="file" className="form-control inputGroupFile02" required></input>
=======
                    <input name='img' onChange={handleImg} type="file" className="form-control inputGroupFile02"></input>
>>>>>>> 18c18ffb587c6b0257214d24798e9b7fd5ba3836
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