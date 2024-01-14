import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import './css/form.css';

function authenticateUser(email, password, set) {
  const endpoint = 'http://localhost:3000/login';

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      set(data.success)
    } else {
      alert('Authentication failed. User not found!');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  });
}

function registerUser(name, email, password) {
  console.log(name, email, password);
const endpoint = 'http://localhost:3000/register';

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password }),
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    alert('User registered successfully. You can now log in.');
  } else {
    alert('Registration failed. ' + data.message);
  }
})
.catch(error => {
  console.error('Error:', error);
  alert('An error occurred. Please try again.');
});
}

const Login_Signup = () => {
  const [isRegistered, setRegistered] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    authenticateUser(userEmail, userPassword, setIsLoggedIn);
  }

  function handleSignup(e) {
    e.preventDefault();
    registerUser(name, email, password);
  }

  function toggleSignup ( ) {
    setRegistered(!isRegistered)
  }

  useEffect(()=>{
    if (isLoggedIn){
      console.log(isLoggedIn);
      navigate('/');
    }
  },[isLoggedIn, navigate]);

	return (
		<div className='.body'>
      <h2 className='text-[#4FA097] text-[32px]' >VCARE LABS <p className='#333'>Your Wellness, Our Priority: Delivering Health to Your Doorstep!Possibilities</p></h2>
      <div className={`container ${isRegistered? "right-panel-active": ""}`} id="container">
        <div className="form-container sign-up-container">
          <form id="signUpForm" action="">
            <h1>Create Account</h1>
            <input type="text" id="signUpName" onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
            <input type="email" id="signUpEmail" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
            <input type="password" id="signUpPassword" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
            <button onClick={handleSignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form id="signInForm" action="#">
            <h1>Sign in</h1>
            <input type="email" id="signInEmail" onChange={(e)=>{setUserEmail(e.target.value)}} placeholder="Email" />
            <input type="password" id="signInPassword" onChange={(e)=>{setUserPassword(e.target.value)}} placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={toggleSignup} id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Explorer!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={toggleSignup} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default Login_Signup;
