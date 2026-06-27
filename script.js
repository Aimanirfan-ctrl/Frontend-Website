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
        modal.classList.add('active');
    });
});
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});
buyBtn.addEventListener('click', () => {
    count = count++;
    badge.innerText = count;
    alert("Product added to cart! 🛒");
});
const themebtn = document.getElementById("light-btn");
themebtn.addEventListener('click',()=>{
    document.body.classList.toggle("light-mode");
});