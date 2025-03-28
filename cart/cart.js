document.addEventListener('DOMContentLoaded', () => {
  loadCart();
});

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cartContainer');

  // Clear container first
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p class="text-center">Your cart is empty 🛒</p>';
    return;
  }

  let totalAmount = 0;

  // Display each product in the cart
  cart.forEach(product => {
    totalAmount += product.price * product.quantity;

    const productCard = `
      <div class="card mb-3 mx-auto" style="max-width: 600px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${product.image}" class="img-fluid rounded-start" alt="${product.name}" style="height: 200px; width: 100%; object-fit: cover;">
          </div>
          <div class="col-md-8 d-flex align-items-center">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Price: ₹${product.price}</p>
              <p class="card-text">Quantity: ${product.quantity}</p>
              <button class="btn btn-danger" onclick="removeFromCart(${product.id})">Remove ❌</button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += productCard;
  });

  // Add Total Payment Section
  const totalPaymentSection = `
    <div class="text-center mt-4">
      <h4>Total Amount: ₹${totalAmount}</h4>
      <button class="btn btn-success" onclick="goToPaymentPage()">Proceed to Pay 💳</button>
    </div>
  `;
  container.innerHTML += totalPaymentSection;
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(product => product.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem('cart');
  loadCart();
}

function goToPaymentPage() {
  // Redirect to the payment page
  window.location.href = '../payment/pay.html';
}
function completePayment() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert("Your cart is empty. Please add products to proceed with payment.");
    return;
  }

  // Get existing orders or create a new array
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  // Add cart items to orders
  orders.push(...cart);

  // Save to localStorage
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.removeItem('cart'); // Clear cart after payment

  alert("Payment Successful! Your order has been placed.");

  // Redirect to Orders page
  window.location.href = '../orders/orders.html';
}

