const modal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const badge = document.getElementById('cartCount');
const buyBtn = document.querySelector('.modal-buy-btn');
let count = 0;
const cards = document.querySelectorAll('.card');
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
    count = count + 1;
    badge.innerText = count;
    alert("Product added to cart! 🛒");
});