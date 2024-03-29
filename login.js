login=(e)=> {

    e.preventDefault()
    const username = document.getElementById('name').value;
    const password = document.getElementById('pass').value; // Added .value

    
   
    const url = 'https://e-shop-tv7f.onrender.com/auth/login/'
    const userData = {
        username,
        password,
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    };


    fetch(url, requestOptions)
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user_id', data.user_id)
        if (data.token) {
            window.location.href = 'home.html';
            location.reload()
        }
        console.log(data)
    })
    .catch(error => console.log(error))

    

}
const loginButton = document.getElementById("loginbutton")

loginButton.addEventListener('click', login)