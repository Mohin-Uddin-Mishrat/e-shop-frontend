const loaduser = ()=>{
    const user = localStorage.getItem('user_id')
    fetch(`https://e-shop-tv7f.onrender.com/auth/users/${user}/`)
    .then(res=> res.json())
    .then(data=> info(data))
}

const info =(data)=> {
    const username = document.getElementById('name')
    const email = document.getElementById('email')
    email.innerText = `Name : ${data?.email}`
    username.innerText = `Email : ${data?.username}`
}

const loadWIshlist = ()=>{
    
    const user = localStorage.getItem('user_id')
    fetch(`https://e-shop-tv7f.onrender.com/wishlist/?user=${user}`)
    .then(res=> res.json())
    .then(data=> wishlist(data))
}

const wishlist = (data)=>{
   data.forEach(element => {
    const wishlist = document.getElementById('wishlist')
    const div = document.createElement('div')
    fetch(`https://e-shop-tv7f.onrender.com/all/${element.product}/`)
    .then(res=> res.json())
    .then(d=> {
        div.innerHTML =`   <div class="my-3 p-5 bg-slate-200 rounded-lg flex justify-between items-center">
        <div class=" ">
            <img src="${d.image}" class="h-[150px]" alt="">
        </div>
        <div>
            <h1 class="font-semibold font-italic text-red-500">${d.name}</h1>
        </div>
        <div>
            <h1 class="font-semibold font-italic text-red-500">Price : ${d.price}</h1>
        </div>
    </div>`

    wishlist.appendChild(div)
    })

   });
}


loadWIshlist()

loaduser()