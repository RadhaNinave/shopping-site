import React, { useState, useRef, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoding] = useState(false);

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
            return res.json();
         }).then(data=>{
            if(isLogin){
                console.log("Login Completed")
                //console.log(data.idToken)
                
                alert("Log In Successful")
            }else{
                 console.log("Sign up Completed")
                 alert("Sign Up Successful")
                 
            }
         }).catch(err=>{
            alert(err.message)
           
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
          
            {!isLoading && <p></p>}
            <div className='text-center pt-3'>
                <button type='button' onClick={switchAuthModeHandler}>

                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>

        </Form>
    </Container>
)
}
export default Login;