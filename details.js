


function loadDetails() {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('product_id');

        fetch(`https://e-shop-tv7f.onrender.com/all/${productId}/`)
                .then(res => res.json())
                .then(data => {

                        console.log(data)
                        loadData(data, queryParams)
                })

        fetch(`https://e-shop-tv7f.onrender.com/review/?product=${productId}`)
                .then(res => res.json())
                .then(data => loadreview(data))
}

function loadData(data,queryParams) {
        const newDiv = document.getElementById("image");
        const description = document.getElementById("description");
        const title = document.getElementById("title");
        const price = document.getElementById("price");
        const wishlist = document.getElementById("Wishlist");
        const review = document.getElementById("review");

        
        
        description.innerText =`${data?.description}`
        title.innerText =`${data?.name}`
        price.innerText =`Price :${data?.price}`
        newDiv.innerHTML =`  <img src="${data?.image}" class="rounded-lg h-full w-full" alt=""> `
        wishlist.innerHTML =`<a onclick='wish(${queryParams})' href=""
        class="inline-block text-white w-1/2 bg-purple-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Wishlist</a>
`       
        const user = localStorage.getItem("user_id")

        if (user) {
            review.innerHTML =     ` <form>
            <label  class="font-semibold"> Review Our Product</label>
            <textarea id="comment" rows="1"
                class="block  p-5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="write  here..."></textarea>
            <input onclick="reviewButton(${queryParams})"
                class="inline-block text-white w-1/2 my-5  bg-purple-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit" class="bg-blue-600">
        </form>`
        }


}

function loadreview(review) {
                console.log(review)
                review.forEach(d => {
                    const review = document.getElementById('reviews');
                    const newDiv = document.createElement("div");
                    newDiv.innerHTML = 
                    `
                        <div class="flex ">
                            <div class="w-8 h-8 my-2 inline-block">
                                <img src="/frontend/WhatsApp_Image_2024-03-15_at_4.49.28_PM-removebg.png" class="rounded-full w-full h-full " alt="">
                            </div>
                            <h1 class="m-2  ">
                                <span class=" underline font-semibold">${d?.user}</span>
                            </h1>
                        </div>
                        <div class="ml-10">
                            ${d?.comment}
                        </div>
                        <div class="border-b-2 pb-2 border-black-500"></div>
    
                    `
                    review.appendChild(newDiv)
                })
            }





loadDetails()




function wish(p) {
    event.preventDefault()
    const user = localStorage.getItem("user_id")
    const product = p

    
    const url = 'https://e-shop-tv7f.onrender.com/wishlist/'
    const userData = {
        user,
        product,
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
        console.log(data)
    })
    .catch(error => console.log(error))

}

function reviewButton(p) {
    event.preventDefault()

    const user = localStorage.getItem("user_id")
    const cmnt = document.getElementById('comment')
    const product = p


    const url = 'https://e-shop-tv7f.onrender.com/review/'
    const userData = {
        user,
        product,
        comment : cmnt.value
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    };

    cmnt.value = '';


    fetch(url, requestOptions)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))


    fetch(`https://e-shop-tv7f.onrender.com/review/?product=${p}`)
                .then(res => res.json())
                .then(data => loadreview(data))
}
