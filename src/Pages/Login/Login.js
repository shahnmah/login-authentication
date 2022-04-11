import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import googleIcon from '../../images/google.png'
import facebookIcon from '../../images/facebook.png'
import './Login.css'

const Login = () => {
    return (
        <div className='w-25 mx-auto my-5'>
            <Form>
                <h4 className='text-center py-2'>Login Account</h4>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 text-end" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                    <span><small className='text-muted'>Forgot Password?</small></span>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <div className='my-4 d-flex justify-content-between'>
                <Button className='provider-icon' variant="transparent" type="submit">
                    <img src={googleIcon} alt="" />
                </Button>
                <Button className='provider-icon' variant="transparent" type="submit">
                    <img src={facebookIcon} alt="" />
                </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;