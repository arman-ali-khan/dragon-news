import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContex';

const Login = () => {
    const {loginUser,setLoading} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const [error, setError] = useState('')
 
    const handleOnSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        loginUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
           if(user.emailVerified){
            navigate(from, {replace: true})
           }else{
            alert('Your Email is not verified')
           }
        })
        .catch(error=>{
            console.error('Error:', error);
            setError(error.message)
        })
        .finally(()=>{
          setLoading(false)
        })
    }
    return (
      <div className='d-flex justify-content-center'>
          <Form className='w-50' onSubmit={handleOnSubmit}>
            <h5>Login Now</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
          
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </div>
    );
};

export default Login;