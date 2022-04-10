function Signup() {
    return (
        <div>
            <h3 className="display-6">Sign Up</h3>

            <div className="form-floating mb-3">
                <input type="email" className="form-control floatingInput" placeholder="name@example.com"></input>
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
                <input type="password" className="form-control floatingPassword" placeholder="Password"></input>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3  ">
                <input type="password" className="form-control floatingPasswordCon" placeholder="Confirm Password"></input>
                <label htmlFor="floatingPasswordCon">Confirm Password</label>
            </div>

            <div className="input-group mb-3">
                <input type="file" className="form-control inputGroupFile02"></input>
                    <label className="input-group-text btn-primary" htmlFor="inputGroupFile02">Upload</label>
            </div>
        </div>
    );
}

export default Signup;