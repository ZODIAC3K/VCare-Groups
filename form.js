const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// ----------------------------------------------------------------------------------------------------------------------------
// Login and Signup Login
// ----------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#signInForm');
    const registerForm = document.querySelector('#signUpForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.querySelector('#signInEmail').value;
      const password = document.querySelector('#signInPassword').value;
  
      authenticateUser(email, password);
    });
  
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.querySelector('#signUpName').value;
      const email = document.querySelector('#signUpEmail').value;
      const password = document.querySelector('#signUpPassword').value;
  
      registerUser(name, email, password);
    });
  
    function authenticateUser(email, password) {
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
          window.location.href = '/home.html';
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
  });
  