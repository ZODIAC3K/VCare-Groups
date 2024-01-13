const navlinks = document.getElementById('navlinks')

window.addEventListener('load', ()=>{
    const auth = JSON.parse(localStorage.getItem('userLogin'));

    navlinks.innerHTML += '<a href="login_signup.html"><li id="auth-button" class="m-2"></li></a>'

    const auth_button = document.getElementById('auth-button');

    if(auth && auth.success) {
        auth_button.textContent = 'Log Out'
    } else {
        auth_button.textContent = 'Log In/Sign Up'
    }

    auth_button.addEventListener('click', ()=>{
        if ( auth_button.textContent === 'Log Out' && localStorage.getItem('userLogin')){
            localStorage.removeItem('userLogin')
        }
    })
})

