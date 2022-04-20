import './Form.css';
import { useState } from 'react';
import contactList from '../../Data/ContactList';
import signIn from '../Env/Env';
import Env from '../Env/Env';
// im

function Login({f, g}) {

    var signInFunc = f;
    var signUpFunc = g;

    const values = {
        user: '',
        pass: ''
    }

    const [formVals, setFormVals] = useState(values)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormVals({ ...formVals, [name]: value })
    }
    
    const handleSubmit = () => {
        console.log(contactList)
        var found = contactList.find((c)=> {
            if (c.user == formVals["user"]) return c;
        })
        if (found) {
            if (found.pword == formVals["pass"]) {
                signInFunc(found);
            }
        }
    }

    return (
        <div className='FormContainer'>
            <div className="Form">
                <h3 className="display-6">Sign In</h3>
                <div className="form-floating mb-3">
                    <input name='user' value={formVals.user} onChange={handleChange} 
                    type="text" className="form-control" id="floatingInput" placeholder="Username"></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input name='pass' value={formVals.pass} onChange={handleChange} 
                    type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="input-group mb-3">
                <a on class="btn btn-secondary sub" type="submit" onClick={handleSubmit} >Submit</a>
                </div>

                <a className="link" onClick={signUpFunc} >Don't have an account?</a>
            </div>
        </div>
    );
}

export default Login;