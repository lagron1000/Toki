import './Form.css';

function Login() {
    return (
        <div className='FormContainer'>
            <div className="Form">
                <h3 className="display-6">Login</h3>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <a className="link" href="/signup">Don't have an account?</a>
            </div>
        </div>
    );
}

export default Login;