function register(e) {
    e.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Added .value
    const confirm_password = document.getElementById('confirm_password').value;
    const email = document.getElementById('email').value;
    const last_name = document.getElementById('last_name').value;
    const first_name = document.getElementById('first_name').value;
    
    const errors = document.getElementById("error")
    errors.innerHTML = " "
    const url = 'https://e-shop-tv7f.onrender.com/auth/register/'
    const userData = {
        username,
        first_name,
        last_name,
        email, 
        password,
        confirm_password
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
        Object.keys(data).forEach(key => {
            const li =document.createElement('li')
            li.innerText = `${key} : ${data[key]}`
            errors.appendChild(li)
        });
        
        const mail = document.getElementById('mail')
        mail.innerText = data.mail
       
    })
    .catch(error => console.log(error))

}
const registerButton = document.getElementById("registerButton")

registerButton.addEventListener('click', register)



