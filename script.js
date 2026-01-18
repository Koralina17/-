let cart = [];

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Додавання в кошик
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const product = {
            id: card.dataset.id,
            name: card.dataset.name,
            price: parseInt(card.dataset.price)
        };
        
        cart.push(product);
        updateCartUI();
    });
});

// Оновлення інтерфейсу
function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.price} грн
            <button class="remove-btn" onclick="removeFromCart(${index})">видалити</button>
        `;
        cartList.appendChild(li);
        total += item.price;
    });

    cartCount.innerText = cart.length;
    totalPrice.innerText = total;
}

// Видалення з кошика
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Закриття модалки при кліку поза нею
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) modal.style.display = "none";
}

