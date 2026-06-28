let cart = [];
let selectedProduct = {};
const modal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const badge = document.getElementById('cartCount');
const buyBtn = document.querySelector('.buy-btn');

let count = 0;
const cards = document.querySelectorAll('.card, .card1');
cards.forEach(card => {
    card.addEventListener('click', () => {

        const productName = card.querySelector('h2').innerText;
        const productPrice = card.querySelector('p').innerText;
        const productImgSrc = card.querySelector('img').src;

        document.getElementById('modalTitle').innerText = productName;
        document.getElementById('modalPrice').innerText = productPrice;
        document.getElementById('modalImg').src = productImgSrc;

        selectedProduct = {
            name: productName,
            price: productPrice,
            image: productImgSrc
        };

        modal.classList.add('active');
    });
});
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});
buyBtn.addEventListener("click", () => {

    cart.push(selectedProduct);

    badge.innerText = cart.length;

    showCart();

    modal.classList.remove("active");

});
const themebtn = document.getElementById("light-btn");
   themebtn.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeBtn.innerText="☀️";
    }
    else{
        themeBtn.innerText="🌙";
    }
});
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");
const closeCart = document.getElementById("closeCart");
function showCart(){

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach((item,index)=>{

        sum += parseFloat(item.price.replace("$",""));

        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" width="70">
            <div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button onclick="removeCart(${index})">❌</button>
        </div>
        `;

    });

    total.innerText = "$" + sum.toFixed(2);

}

function removeCart(index){

    cart.splice(index,1);

    badge.innerText = cart.length;

    showCart();

}

document.querySelector(".cart-icon-container").onclick = () => {
    cartPanel.classList.add("active");
}

closeCart.onclick = () => {
    cartPanel.classList.remove("active");
}
