import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Please Log in</h1>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' required />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder='Your password' required />
                </div>
                
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p>New to this website ? please <Link to='/register'>Register</Link></p>
           
        </div>
    );
};

export default Login;