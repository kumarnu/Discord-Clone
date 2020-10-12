import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {
    //Step-1
const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
}


    return (
      <div className="login">
        <div className="login_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
            alt=""
          />
        </div>
        <p>
          This site has been created for the learning purpose by{" "}
          <a href="https://nitish-profile.netlify.app/">Nitish♥</a>
        </p>
        <Button onClick={signIn}>Sign In</Button>
      </div>
    );
}

export default Login
