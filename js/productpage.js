// Global variables
let productCard = document.querySelector(".product-card");
let commentButton = document.getElementById("addCommentButton");
let commentInput = document.getElementById("addCommentInput");
let ul = document.querySelector(".comments");

// EventListners
document.addEventListener("DOMContentLoaded", loadProduct)

commentButton.addEventListener("click", commentFunc)

// functions
function loadProduct(){
   let product_id =  localStorage.getItem("product_id");
   
   fetch(`https://fakestoreapi.com/products/${product_id}`)
    .then(res=>res.json())
    .then(product=>{
        viewProduct(productCard, product)
    })

}

function viewProduct(appendIn,product){
    let div = document.createElement('div');
    div.className = "item justify-self-center";
    let { image, title, category, price} = product;

    div.innerHTML = `
            <img src="${image}" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="text-lg title">${title}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
                <span class="block py-3">$<span class="text-md">${price}</span></span>
                <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md" >
                <a href="" > Buy Now </a></button>
            </div>
    `;
    appendIn.appendChild(div);
    }

function commentFunc(e){
    let li = document.createElement('li');
    li.innerHTML = commentInput.value;
    ul.appendChild(li);
}