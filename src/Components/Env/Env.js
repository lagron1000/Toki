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

function Env() {

    let signedIn = true;

    const Startup = () => {
        if (signedIn) return (<Chat></Chat>);
        return (<Login></Login>);
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