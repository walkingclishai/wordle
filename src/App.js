import bottomImg from './assets/bottom.jpg'
import topImg from './assets/top.jpg'
import './App.css';
import React, { useState } from 'react'
import axios from 'axios'



function SignIn({switch: switchProp}){

const [user, setUser] = useState('');
const [password, setPassword] = useState('');

const handleLogIn = async(e) =>{
e.preventDefault();

try {
  axios.post('http://localhost:8081/user', {username: user, password: password})
  .then(res => {
    if(res.data === "Login Successfully"){
      alert(res.data)
    } else {
      alert(res.data)
    }
  }).catch(err =>{console.log("it's not your fault:", err)})
} catch (error) {
  console.log("now it's your fault", error)
}
}



  return(
    <>
    
    <h1>Welcome back!</h1>
        <p id="dscrp">Challenge your mind and have fun with Wordle, the ultimate word game!</p>
    
    <form>
        
        <input className="sign-in" type="text" id="username" name="username" placeholder="   Username" onChange={(e) => setUser(e.target.value)} value={user} required/>

        <input className="sign-in"  type="password" id="password" name="password" placeholder="   Password"  onChange={(e) => setPassword(e.target.value)} value={password} required/>
        <a href="wwww.google.com" target="_blank" className="pw">Forgot Password?</a>

        <button className='submit' type="submit" onClick={handleLogIn}>Login</button>

        <div id="small-container">
        <p className="continue">or continue with</p>

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
    <p className="footnote">Not a member? <button className="footnotelink"  onClick={switchProp}>Register now</button></p>
    </form>
    
    </>
  )
}

function SignUp({switch: switchProp}){
  return(
   
    <>
    <h1>Sign up to Wordle</h1>
    
    <form id="signup-form">
    
    <div id="test">
    <label className="label-name" for="fullName">Full Name:</label>
    <input className="sign-up input1" type="text" id="fullName" name="fullName" required />


    <label className="label-user" for="username">Username:</label>
    <input className="sign-up input2" type="text" id="username" name="username" required/>
  
    
    <label className="label-email" for="email">Email Address:</label>
    <input className="sign-up input3" type="email" id="email" name="email" required/>

    <label className="label-pass" for="password">Password:</label>
    <input className="sign-up input4" type="password" id="password" name="password" required/>
    </div>


      <button className='register' type="submit" value="register">Create Account</button>

    
        <p>or</p>


        <button className="google-button">
        <i className="fab fa-google"></i> Sign up with Google
    </button>


        <p>Already a Member? <button className="link" onClick={switchProp}>Sign in</button></p>

    </form></>
  )
}

function App() {

  const word = ["W", "O", "R", "D", "L", "E"]

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


          <div id="game">
<div id='box-0' className='box'>{word[0]}</div>
<div id='box-1' className='box'>{word[1]}</div>
<div id='box-2'className='box'>{word[2]}</div>
<div id='box-3' className='box'>{word[3]}</div>
<div id='box-4' className='box'>{word[4]}</div>
<div id='box-4' className='box'>{word[5]}</div>
</div>

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
