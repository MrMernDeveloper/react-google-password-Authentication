import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';


const auth = getAuth(app);

const From = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const handelRegister = (event) => {
        setSuccess(false);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value
        console.log(email, password, name)

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two  uppercase letters')
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password should be 6 character')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one SPECIAL CHARACTER')
            return;
        }
        setPasswordError('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)
                form.reset();
                verifyEmail()
                updateName(name);
            
            })
            .catch(error => {
                console.log('error', error);
                setPasswordError(error.message)
            })
        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                alert('please check your email and verify')
            })
        }
        const updateName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name

            })
                .then(() => {
                console.log('display updated')
                })
                .catch(error => {
                console.log(error)
            })
            
        }
        
       
    }


    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{passwordError}</p>
                {
                    success && <p className='text-success'>User Created sussesFully</p>
                }
              
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <small>Already Have an account? please <Link to='/login'>Log in</Link></small>

        </div>
    );
};

export default From;