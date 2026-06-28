let cart = [];
let selectedProduct = {};
const modal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const badge = document.getElementById("cartCount");
const buyBtn = document.querySelector(".buy-btn");
const themebtn = document.getElementById("light-btn");
const cards = document.querySelectorAll(".card, .card1");
cards.forEach(card => {
    card.addEventListener("click",()=>{
        const productName = card.querySelector("h2").innerText;
        const productPrice = card.querySelector("p").innerText;
        const productImg = card.querySelector("img").src;
        document.getElementById("modalTitle").innerText = productName;
        document.getElementById("modalPrice").innerText = productPrice;
        document.getElementById("modalImg").src = productImg;
        selectedProduct = {
          name: productName,
            price: productPrice,
            image: productImg
        };

        modal.classList.add("active");
    });
});
closeModalBtn.addEventListener("click",()=>{

    modal.classList.remove("active");

});
buyBtn.addEventListener("click",()=>{
    cart.push(selectedProduct);
    badge.innerText = cart.length;
    alert(selectedProduct.name + " Added To Cart 🛒");
    modal.classList.remove("active");

});

document.querySelector(".cart-icon-container").addEventListener("click",()=>{

    if(cart.length==0){

        alert("🛒 Cart is Empty!");

    }else{

        let message="🛒 YOUR CART\n\n";

        let total=0;

        cart.forEach((item,index)=>{

            message += (index+1)+". "+item.name+" - "+item.price+"\n";

            total += parseFloat(item.price.replace("$",""));

        });

        message += "\n-----------------\n";
        message += "Total = $" + total.toFixed(2);

        alert(message);

    }

});
if(themebtn){

themebtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themebtn.innerText="☀️";

    }else{

        themebtn.innerText="🌙";

    }

});

}