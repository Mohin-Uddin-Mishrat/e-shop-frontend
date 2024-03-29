
function loadProduct(filter) {
    const cardParent = document.getElementById('cards');
    cardParent.innerHTML = " "
    let url = `https://e-shop-tv7f.onrender.com/all/`;
    if (filter === "M" || filter === "S" || filter === "L" || filter === "XL") {
         url = `https://e-shop-tv7f.onrender.com/all/?size=${filter}`;
    } else if (filter === "Yellow" || filter === "Red" || filter === "Blue" || filter === "White") {
         url = `https://e-shop-tv7f.onrender.com/all/?color=${filter}`;
    } else if (filter === "price" ) {
        url = `https://e-shop-tv7f.onrender.com/all/?ordering=${filter}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => displayProduct(data))
        .catch(error => console.error('Error fetching data:', error));
}



loadProduct(); 

function displayProduct(data) {
    console.log(data)
    data.forEach(d => {
        const cardParent = document.getElementById('cards');
        const carddiv = document.createElement('div');
        carddiv.innerHTML = 
        `
        <div class="  rounded bg-slate-200">
        <div class="flex justify-center">
          <img src="${d.image}" class=" inline-block h-40">
        </div>
        <div class="p-3">
          <h1 class="font-bold text-white "> ${d.name}</h1>
          <h1 class="font-semibold "></h1>
          <p></p>
          <p class="font-bold"> Price :<span class="font-bold text-red-700 mx-2">${d.price}</span>
          <p class="font-bold"> Size :<span class="font-bold text-red-700 mx-2">${d.size}</span>
          <p class="font-bold"> Colour :<span class="font-bold text-red-700 mx-2">${d.color}</span>
          </p>
          <div class="text-center  my-2">
            <a href="details.html?product_id=${d.id}"
              class="text-white bg-purple-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">details</a>
          </div>
        </div>
      </div>

        `
        cardParent.appendChild(carddiv)
    })
}