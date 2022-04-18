import './Env.css';
import Form from '../Forms/Form';
import Chat from '../Chat/Chat';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from '../Forms/Login';
import Signup from '../Forms/Signup';
import { useState } from 'react';

// let signedIn = false;

// export function signIn() {
//     signedIn = true;
// }


function Env() {

    const [signedIn, signIn] = useState(false);

    // let signedIn = false;


    // this.state.isSigned = false;
    // this.setState

    // function signIn() {
    //     signedIn = true;
    // }

    const Startup = () => {
        if (signedIn) return (<Chat></Chat>);
        return (<Login f={() => {
            signIn(true);
        }}></Login>);
    }

    return (
        <div className="Main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startup />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Env