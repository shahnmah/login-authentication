import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-25 mx-auto my-5'>
            <Form>
                <h4 className='text-center py-2'>Create Account</h4>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 text-end" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 my-2' variant="primary" type="submit">
                    Submit
                </Button>
                {/* <div className='my-4 d-flex justify-content-between'>
                <Button className='provider-icon' variant="transparent" type="submit">
                    <img src={googleIcon} alt="" />
                </Button>
                <Button className='provider-icon' variant="transparent" type="submit">
                    <img src={facebookIcon} alt="" />
                </Button>
                </div> */}
                <p className='text-muted text-center'><small>Already have an account?<Link to='/login'>Login</Link></small></p>
            </Form>
        </div>
    );
};

export default SignUp;