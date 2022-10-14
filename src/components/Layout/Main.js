import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav className='text-center mt-3'>
            <Link className='text-decoration-none ms-4' to='/login'>Log in </Link>
            <Link className='text-decoration-none ms-4' to='/register'>Register</Link>
            
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;