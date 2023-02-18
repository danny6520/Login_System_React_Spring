import React from "react";
import ReactDOM from 'react-dom/client';
const Login_form = () => {
    return (
        <>
        <div className="container">
            <form>
                <label>Enter your email:</label><br />
                <input type="text" name="email" className="form-control" placeholder="Enter your email ID" required /><br />
                <label>Enter your password:</label><br />
                <input type="password" name="password" className="form-control" placeholder="Enter your password" required /><br />
                <center><button type="submit" name="submit" className="btn btn-success">Login</button></center>
            </form>
        </div>
        </>
    )
}
export default Login_form