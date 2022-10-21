import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContex';

const Register = () => {
    const {createUser,getName,verifyEmail} = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [accept, setAccept]  = useState(false)

  const handleAccept = (event)=>{
    const clicked = event.target.checked;
    setAccept(clicked);
  }

  console.log(accept);
    const handleOnSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name,email,password, confirm);
        form.reset();
       
         if(password.length < 6 ){
            setError('Password Must Be 6 Charecter')
            return;
        }
        if(password !== confirm){
            setError("Password Don't Match")
            return;
        }
        setError('')

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            handleEmailVerify();
            handleUserName(name,photoUrl)
        })
        .catch(error=>{
            console.error('Error:', error);
        })
    }

    const handleUserName = (name, photoUrl)=>{
      const userName = {displayName: name, photoURL: photoUrl}
      getName(userName)
      .then(()=>{
        console.log('Name Added');
      })
    
    }

    const handleEmailVerify =()=>{
      verifyEmail()
      .then(()=>{
        alert('Verification Email Send')
      })
    }
    return (
        <div className='d-flex justify-content-center'>
          <Form className='w-50' onSubmit={handleOnSubmit}>
            <h5>Register Now</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Label>Full Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Full Name" /> 

           <Form.Label>Photo Url</Form.Label>
          <Form.Control name='photo' type="url" placeholder="Photo url" />

          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
          
          
          
          
           <Form.Label>Confirm Password</Form.Label>
          <Form.Control name='confirm' type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccept} type="checkbox" label={<>Accept <Link to='/trems'>Trems and Condition</Link></>} />

       {
        error &&  <Form.Text className="text-danger">
        {error}
      </Form.Text>
       }


        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Submit
        </Button>
      </Form>
      </div>
    );
};

export default Register;