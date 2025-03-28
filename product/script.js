document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

function fetchProducts() {
  fetch('./product.json')
    .then(response => response.json())
    .then(products => displayProducts(products))
    .catch(error => console.error('Error loading products:', error));
}

function displayProducts(products) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  products.forEach(product => {
    const productCard = `
      <div class="col">
        <div class="card">
          <img src="${product.image}" class="product-img" alt="${product.name}" />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: ₹${product.price}</p>
            <button class="btn btn-success add-to-cart-btn" 
                    onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}', this)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += productCard;
  });
}

function addToCart(id, name, price, image, button) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = { id, name, price, image };

  // Check if product already exists
  const existingProduct = cart.find(item => item.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Apply tick effect
  button.innerHTML = '<span class="checkmark">✔</span> Added!';
  button.disabled = true; // Disable the button temporarily

  setTimeout(() => {
    button.innerHTML = 'Add to Cart';
    button.disabled = false;
  }, 1500); // Reset after 1.5s
}
