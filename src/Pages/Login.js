import React ,{useState , useRef , useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
const Login = () =>{
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const[isLogin , setIsLogin]=useState(true)
    const[ isLoading, setIsLoding]=useState(false);

    const switchAuthModeHandler=()=>{
        setIsLogin((prev)=>!prev)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;

        setIsLoding(true);
        if(isLogin)
        {
            
        }
        else{
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQx4rus_zRxC0qxoOFGFKmaULM5XQbkWY",
            {               method :'POST',
                body : JSON.stringify({
                    email: enteredEmail,
                    password : enteredPassword,
                    returnSecureToken : true
                }),
                headers : {'Content-Typ0e' : 'application/json'}
            }).then((res)=>{
                setIsLoding(false);
                if(res.ok)
                {

                }
                else{
                    res.json().then(data =>{
                        let errorMessage="Authentication failed";
                        if(data && data.error && data.error.message)
                        {
                            errorMessage=data.error.message
                        }
                        alert(errorMessage);
                    })
                }
            });
        }

    };
    return(
        <Container className='pt-5'>
        <Form  className='pt-3' onSubmit={submitHandler}>
            <h1 className='text-center' >{isLogin ? 'Log In' : "Sign Up"}</h1>
          <Form.Group  className="mb-3">
            <Form.Label htmlFor='email'>Email address</Form.Label>
            <Form.Control id='email' type="email" placeholder="Enter email" required ref={emailInputRef}/>
            
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control id='password' type="password" placeholder="Password" required ref={passwordInputRef}/>
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
         
        </Form>
        </Container>
    )
}
export default Login;