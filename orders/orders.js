document.addEventListener('DOMContentLoaded', displayOrders);

function displayOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const container = document.getElementById('ordersContainer');

  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p class='text-center'>No orders placed yet. Please add products and proceed to payment.</p>";
    return;
  }
  function clearCart() {
    localStorage.removeItem('cart');
    alert('Cart cleared!');
    loadCart();
  }
  // Display each order
  orders.forEach(order => {
    const orderCard = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${order.image}" class="img-fluid rounded-start" alt="${order.name}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${order.name}</h5>
              <p class="card-text">Price: ₹${order.price}</p>
              <p class="card-text">Quantity: ${order.quantity}</p>
              <p class="text-success">Payment Status: Successful ✅</p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += orderCard;
  });
}
