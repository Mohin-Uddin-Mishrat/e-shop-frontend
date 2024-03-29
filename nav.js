const navfun =() =>{
    
    const nav = document.getElementById('nav');
    const user = localStorage.getItem('user_id')
    
    if (user) {
        nav.innerHTML = 
        `
    <div>
        <h1 class="text-red font-bold text-2xl">E-Shop</h1>
    </div>
    <div>
        <a class="" href="index.html">Home</a>
        <a class=" mx-3 " href="product.html">Prouducts</a>
        <a  href="profile.html"  class="mx-3" > Profile </a>

    </div>
   
    <div>
        <a onclick='logout()' href="login.html"  class="mx-3 p-3 border-2 border-sky-500" > Log Out</a>
    </div>

        `
    }else {

        nav.innerHTML =  `
        <div>
            <h1 class="text-red font-bold text-2xl">E-Shop</h1>
        </div>
        <div>
            <a class="" href="index.html">Home</a>
            <a class=" mx-3 " href="product.html">Prouducts</a>
        </div>
        <div>
            <a class="mx-3"  href="login.html"> login</a>
            <a class="mx-3"  href="register.html"> Register</a>
        </div>
    
            `

    }
    

}




navfun()

const logout =() =>{
    event.preventDefault()
    const nav = document.getElementById('nav')

    nav.innerHTML =  `
    <div>
        <h1 class="text-red font-bold text-2xl">E-Shop</h1>
    </div>
    <div>
        <a class="" href="index.html">Home</a>
        <a class=" mx-3 " href="product.html">Prouducts</a>
    </div>
    <div>
        <a class="mx-3"  href="login.html"> login</a>
        <a class="mx-3"  href="register.html"> Register</a>
    </div>

        `

    
        const url = 'https://e-shop-tv7f.onrender.com/auth/logout/'
        localStorage.setItem("user_id", "")
        localStorage.setItem("token","")
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

    
        })
        .catch(error => console.log(error))

        location.reload();

    
}