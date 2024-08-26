import bottomImg from './assets/bottom.jpg'
import topImg from './assets/top.jpg'
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'



function SignIn({switch: switchProp}){

const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('')
useEffect(() =>{
handleErrors()
setError('')
},[user, password])

const handleErrors = () =>{
  const button = document.getElementById('btn')
  if(user.length >= 5 && password.length >= 8){
   
   button.disabled = false;
   button.style.backgroundColor = '#3a7fba';
  } else{
    button.disabled = true;
    button.style.backgroundColor = 'grey';
  }
}

const handleLogIn = async(e) =>{
e.preventDefault();

try {
  axios.post('http://localhost:8081/user', {username: user, password: password})
  .then(res => {
    if(res.data === "Login Successfully"){
      alert(res.data)
    } else {
      setError(res.data)

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
      
    <div class="input-container">
        <i className="login__icon fas fa-user"></i>
        <input type="text" id="username" name="username" placeholder="Username" onChange={(e) => {setUser(e.target.value)}} value={user} required/>
</div>
        <div className="input-container">
        <i className="login__icon fas fa-lock"></i>
        <input type="password" id="password" name="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
        </div>
        {error.length < 1? <></> : <div id="error-login">{error}</div>}
        <a href="wwww.google.com" target="_blank" className="pw">Forgot Password?</a>

        <button id="btn" className='submit' type="submit" onClick={handleLogIn}>Login</button>

        <div id="small-container">
        <p className="continue">or continue with</p>

        <ul id="socials">
    <li>
        <button className="button gmail">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
        </button>
    </li>
    <li>
        <button className="button icloud">
        <svg xmlns="http://www.w3.org/2000/svg" width="0.82em" height="1em" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>
        </button>
    </li>
    <li>
        <button className="button facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
        </button>
    </li>
</ul>
        
    </div>
    <p className="footnote">Not a member? <button className="footnotelink"  onClick={switchProp}>Register now</button></p>
    </form>
    
    </>
  )
}

function SignUp({switch: switchProp}){

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);
    
    const handleTests = () =>{
      if(name.length < 4){
        alert ('Please enter your full name')
        setValid(false)
        return
        }
      if(user.length < 5){
        alert('Username should be at least five characters')
        setValid(false)
        return
      }
      const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
      if(!emailRegex.test(email)){
        alert('Invalid email address')
        setValid(false)
        return
      }

      const passwordRegex = /^[A-Za-z0-9]*$/;
      if(!passwordRegex.test(password)){
      alert('A password should include at least one uppercase letter, a number, and a special character');
      setValid(false)
      return
      }
      setValid(true)
      }

    

    const handleSignUp = async(e) =>{
    e.preventDefault();
    console.log(user, password, email, name)
    handleTests()
    if(valid == false){
      return
    }
  
    try {
      axios.post('http://localhost:8081/add', {username: user, password: password, fullname: name, email: email})
      .then(res => {
        if(res.data === "User added successfully"){
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
    <h1>Sign up to Wordle</h1>
    
    <form id="signup-form">
    
    <div id="test">
    <label className="label-name" for="fullName">Full Name:</label>
    <input className="sign-up input1" type="text" id="fullName" name="fullName" onChange={(e) => setName(e.target.value)} value={name} required />


    <label className="label-user" for="username">Username:</label>
    <input className="sign-up input2" type="text" id="username" name="username" onChange={(e) => setUser(e.target.value)} value={user} required/>
  
    
    <label className="label-email" for="email">Email Address:</label>
    <input className="sign-up input3" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>

    <label className="label-pass" for="password">Password:</label>
    <input className="sign-up input4" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
    </div>


      <button className='register' type="submit" value="register" onClick={handleSignUp}>Create Account</button>

    
        <p>or</p>


        <button className="google-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="google-icon">
        <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.2-4.1-50.4H272v95.2h147.3c-6.3 34.1-25 63-53.3 82.3v68h86.2c50.5-46.5 79.4-115 79.4-196.1z"/>
        <path fill="#34A853" d="M272 544.3c72.4 0 133.1-23.9 177-64.9l-86.2-68c-23.9 16-54.4 25.4-90.8 25.4-69.8 0-128.8-47-149.5-110.3H36.8v69.2C81.7 486.3 168.3 544.3 272 544.3z"/>
        <path fill="#FBBC05" d="M122.5 325.7c-4.8-14.4-7.6-29.7-7.6-45.7s2.8-31.3 7.6-45.7V151.3H36.8c-23.2 46.2-23.2 101.3 0 147.5l85.7 27.2z"/>
        <path fill="#EA4335" d="M272 107.3c38.8 0 73.7 13.3 101.3 39.6l75.6-75.6C402.7 24 342.4 0 272 0 168.3 0 81.7 58 36.8 151.3l85.7 69.2c20.7-63.3 79.7-110.3 149.5-110.3z"/>
    </svg>
           Sign up with Google
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
