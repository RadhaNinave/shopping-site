import {useRef , useContext} from 'react'
import AuthContext from '../Components/Store/AuthContext';
import classes from './ResetPassword.module.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const authCtx = useContext(AuthContext)
  const newPasswordRef = useRef();
  const navigate= useNavigate();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAQx4rus_zRxC0qxoOFGFKmaULM5XQbkWY` ,
    {
      method : 'POST',
      body : JSON.stringify({
        idToken : authCtx.token,
        password :enteredNewPassword,
        returnSecureToken : true
      }),
      headers :{
        'Content-Type' : 'application/json'
      }
      
    }).then(res=>{
      navigate('/');
      alert('password changed successfully');
       return res.json()
      
    }).catch(err=>{
    console.log(err.message);
    })
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}


export default ResetPassword;