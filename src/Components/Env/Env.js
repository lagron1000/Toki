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

    const [signedIn, signIn] = useState(null);

    const [inOrOut, switchInOut] = useState(false);

    const Startup = () => {
        if (signedIn != null) return (<Chat user={signedIn}></Chat>);
        return (<Form></Form>);
    }

    const f = (user) => {signIn(user)};

    const g = () => {
        switchInOut(!inOrOut)
    }

    const Form = () => {
        if (!inOrOut) return (<Login f={f} g={g}></Login>);
        else return (<Signup g={g}></Signup>);
    }

    return (
        <div className="Main">
            <Startup></Startup>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startup />} />
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}

export default Env