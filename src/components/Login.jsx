import React, { useState } from 'react'
import '../styles/Login.css'
import {Link,useHistory} from 'react-router-dom';
import { auth } from '../firebase/firebase';


const Login = () => {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        }).catch(err=>alert(err.message));
    }

    const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then(auth=>{
        history.push('/');
      }).catch(err=>alert(err.message))
    };
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login_img"
            src="https://i.postimg.cc/c1wJW4tF/amlogo.png"
            alt="login"
          />
        </Link>
        <div className="login_container" >
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email"/>
                <h5>Password</h5>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password"/>
                <button className="signin_btn"type="submit" onClick={login}> Sign in</button>
            </form>
            <p className="text-muted">By signing in you agree to the terms and condition of Amazon</p>
            <button className="signup_btn " onClick={register}>Create you Amazon Account</button>
        </div>
      </div>
    );
}

export default Login
