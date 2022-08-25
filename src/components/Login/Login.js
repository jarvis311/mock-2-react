import React, { useState } from "react";
import InputField from "../InputField";
import {signInWithEmailAndPassword} from 'firebase/auth'
import './login.css'
import { auth } from "../../firebase/fireStore";



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {    
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("sucessfullu login");
        })
        .catch(err => console.log('Error',err))
      }

  return (
    <form onSubmit={login} className="login_container">
      <div className="login_inputs">
        <InputField
          labelName="Enter Email"
          htmlFor="email"
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          labelName="Enter password"
          htmlFor="password"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
