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

function Env() {

    const [signedIn, signIn] = useState(false);

    const [inOrOut, switchInOut] = useState(false);

    const Startup = () => {
        if (signedIn) return (<Chat></Chat>);
        return (<Form></Form>);
    }

    const f = () => {signIn(true)};

    const g = () => {
        debugger
        switchInOut(!inOrOut)}

    const Form = () => {
        if (!inOrOut) return (<Login f={f} g={g}></Login>);
        else return (<Signup g={g}></Signup>);
    }

    return (
        <div className="Main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startup />} />
                    {/* <Route path="signup" element={<Signup />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Env