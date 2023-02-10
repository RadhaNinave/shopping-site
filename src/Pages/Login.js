import React, { useState, useRef, useContext, } from 'react'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import AuthContext from '../Components/Store/AuthContext';
import { NavLink } from 'react-bootstrap';
import ResetPassword from './ResetPassword';
const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoding] = useState(false);
    
    const authCtx=useContext(AuthContext);
    const history=useNavigate();
    const switchAuthModeHandler = () => {
        setIsLogin((prev) => !prev)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoding(true);
        let url = "";
        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQx4rus_zRxC0qxoOFGFKmaULM5XQbkWY"
        }
        else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQx4rus_zRxC0qxoOFGFKmaULM5XQbkWY";
        }
        fetch(url , {
            method:'POST',
            body : JSON.stringify({
            email: enteredEmail,
            password : enteredPassword,
            returnSecureToken : true
            }),
            headers : {'Content-Type' : 'application/json'},
         }).then(res =>{
            setIsLoding(false);
            if(res.ok){
                return res.json();

            }
        
            else{
                 return res.json().then((data)=>{
                    let errorMessage="Authentication failed";
                    if(data && data.error && data.error.message){
                        errorMessage=data.error.message;
                    }
                    
                    throw new Error(errorMessage)
                 })
                }
            }).then(data =>{
                authCtx.login(data.idToken);
                history('/');
            }).catch(err =>{
                alert(err.message);

            })  
          
    
    };


return (
    <Container className='pt-5'>
        <Form className='pt-3' onSubmit={submitHandler}>
            <h1 className='text-center' >{isLogin ? 'Log In' : "Sign Up"}</h1>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='email'>Email address</Form.Label>
                <Form.Control id='email' type="email" placeholder="Enter email" required ref={emailInputRef} />

            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control id='password' type="password" placeholder="Password" required ref={passwordInputRef} />
            </Form.Group>

            {!isLoading && <Button variant="primary" type="submit">
                {isLogin ? 'Log In' : "Sign Up"}
            </Button>}
            {isLoading && <p>Sending Request...</p>}
          
            <div className='text-center pt-3'>
                <button type='button' onClick={switchAuthModeHandler}>
               
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>
            <div className='text-center pt-3'>
            <Link to="/ResetPassword"> Reset <ResetPassword /> </Link>
            
            </div>
         

        </Form>
    </Container>
)
}
export default Login;