import bottomImg from './assets/bottom.jpg'
import topImg from './assets/top.jpg'
import './App.css';
import React, { useState } from 'react'

const word = ["W", "O", "R", "D", "L", "E"]

function SignIn({switch: switchProp}){
  return(
    <>
    
    <h1>Welcome back!</h1>
        <p id="dscrp">Challenge your mind and have fun with Wordle, the ultimate word game!</p>
    
    <form>
        
        <input className="sign-in" type="text" id="username" name="username" placeholder="   Username" required/>

        <input className="sign-in"  type="password" id="password" name="password" placeholder="   Password" required/>
        <a href="wwww.google.com" target="_blank" className="pw">Forgot Password?</a>

        <button className='submit' type="submit">Login</button>

        <div id="small-container">
        <p>or continue with</p>

        <div id="socials">
        <button className="button gmail">
          <i className="fab fa-google"></i>
        </button>
        <button className="button icloud">
          <i className="fab fa-apple"></i>
        </button>
        <button className="button facebook">
          <i className="fab fa-facebook"></i>
        </button>
        </div>
        
    </div>
    <p className="footnote">Not a member? <button className="footnotelink"  onClick={switchProp}>Register Now</button></p>
    </form>
    
    </>
  )
}

function SignUp({switch: switchProp}){
  return(
   
    <>
    <h1>Sign up to Wordle</h1>
    
    <form id="signup-form">
    <div id="input-group">
    <div>
    <label for="fullName">Full Name:</label>
    <input className="sign-up small" type="text" id="fullName" name="fullName" required />
</div>

    <div>
    <label for="username">Username:</label>
    <input className="sign-up small" type="text" id="username" name="username" required/>
    </div>
    </div>

    <div className="full">
    <label for="email">Email Address:</label>
    <input className="sign-up" type="email" id="email" name="email" required/>
    </div>

    <div className="full">
    <label for="password">Password:</label>
    <input className="sign-up" type="password" id="password" name="password" required/>
    </div>
      <button className='register' type="submit" value="register">Create Account</button>

    
        <p>or</p>


        <button className="google-button">
        <i className="fab fa-google"></i> Sign up with Google
    </button>


        <p>Already a Member? <button onClick={switchProp}>Sign in</button></p>

    </form></>
  )
}

function App() {

  const[log, setLog] = useState(true)

const Switch = () =>{
setLog(!log)
}

  return (
    <div className="App">
      <div id="left">
        <div className="img-container">
          <img alt='wordle' src={topImg}/>
          <div className="title-container">




</div>
          <img alt='alt' src={bottomImg} height="260px"/>
        </div>
      </div>
      <div id="right">

        {log ? <SignIn switch ={Switch}/> : <SignUp switch ={Switch} />}

    
      </div>
    </div>
  );
}

export default App;
