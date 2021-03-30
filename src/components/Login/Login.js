import React from 'react';
import './Login.css'
import facebook from './../icons/facebook.png'
import google from './../icons/google.png'

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <form className="login-form  p-5">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="inter your email" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="inter your password" required />
                            <div id="emailHelp" className="form-text"> your'll never share your password with anyone else.</div>
                        </div>
                        <button style={{ width: '100%' }} type="submit" className="btn btn-primary">LOGIN</button>
                    </form>

                    <br />
                     
                     <h4>Or</h4>

                    <div className="px-5 py-3">
                        <div className="loginWithFacebook">
                            <button className="button" type="submit"> <img className="me-3" src={facebook} alt='' /> Continue with Facebook</button>
                        </div>
                        <br />
                        <div className="loginWithGoogle">
                            <button className="button" type="submit"><img className="me-5 " src={google} alt='' />Continue with Google</button>
                        </div>
                    </div>


                </div>
                <div className="col-md-3"></div>
            </div>
        </div>

    );
};

export default Login;