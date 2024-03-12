let cart = [];
const productPrice = 130; // Priset för varje produkt

function addToCart(color) {
    cart.push({ color: color, price: productPrice });
    updateCartDisplay();
}

function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}

function updateCartDisplay() {
    const totalPriceElement = document.getElementById('totalPrice');
    
    const totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = totalPrice + 'kr';
}
