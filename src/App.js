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
      
    <div class="input-container">
        <i className="login__icon fas fa-user"></i>
        <input type="text" id="username" name="username" placeholder="Username" onChange={(e) => setUser(e.target.value)} value={user} required/>
</div>
        <div className="input-container">
        <i className="login__icon fas fa-lock"></i>
        <input type="password" id="password" name="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>

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
