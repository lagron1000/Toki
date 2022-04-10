import './Form.css';
import Login from "./Login";
import Signup from "./Signup";

function Form() {
    return (
        <div className='FormContainer'>
            <div className="Form">
                {/* <Login></Login> */}
                <Signup></Signup>
            </div>
        </div>
    )
}

export default Form;