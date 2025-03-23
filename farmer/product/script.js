// Product List
const products = [
    { name: "Fresh Apples", price: "$3.99/kg", image: "./img/apple.jpg" },
    { name: "Organic Bananas", price: "$1.49/kg", image: "./img/banana.jpg" },
    { name: "Farm Fresh Eggs", price: "$5.99/dozen", image: "./img/eggs.jpg" },
    { name: "Fresh Carrots", price: "$2.99/kg", image: "./img/carrots.png" },
    { name: "Juicy Oranges", price: "$4.50/kg", image: "./img/oranges.jpg" },
    { name: "Ripe Mangoes", price: "$6.99/kg", image: "./img/mangos.jpg" },
    { name: "Organic Spinach", price: "$2.50/bundle", image: "./img/spinach.jpg" },
    { name: "Tomatoes", price: "$3.79/kg", image: "./img/tomato.jpg" },
    { name: "Milk", price: "$2.99/L", image: "./img/milk.jpg" },
    { name: "Honey", price: "$9.99/jar", image: "./img/honey.jpg" },
    { name: "Potatoes", price: "$1.99/kg", image: "./img/potato.jpg" },
    { name: "Strawberries", price: "$7.50/kg", image: "./img/strawbery.jpg" },
    { name: "Pineapple", price: "$5.49/each", image: "./img/pineapple.jpg" },
    { name: "Bell Peppers", price: "$4.29/kg", image: "./img/pepper.jpg" },
    { name: "Avocado", price: "$3.49/each", image: "./img/avacado.jpg" },
    { name: "Broccoli", price: "$3.79/kg", image: "./img/broccoli.jpg" },
    { name: "Lettuce", price: "$1.99/head", image: "./img/lettues.jpg" },
    { name: "Cabbage", price: "$2.49/head", image: "./img/cabbage.jpg" },
    { name: "Watermelon", price: "$8.99/each", image: "./img/wattermellon.jpg" },
    { name: "Blueberries", price: "$12.99/kg", image: "./img/berry.jpg" }
  ];
  
  // Display Products
  const productContainer = document.getElementById('productContainer');
  products.forEach(product => {
    productContainer.innerHTML += `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <button class="btn btn-success" onclick="addToCart(this)">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });
  
  // Button Click Effect
  function addToCart(button) {
    button.textContent = "Added to Cart ✓";
    button.classList.remove('btn-success');
    button.classList.add('btn-secondary');
  
    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.classList.remove('btn-secondary');
      button.classList.add('btn-success');
    }, 1500);
  }
  
  // Submit Review
  function submitReview() {
    const name = document.getElementById('userName').value;
    const review = document.getElementById('userReview').value;
    const reviewsContainer = document.getElementById('reviewsContainer');
  
    if (name && review) {
      const reviewHTML = `<p><strong>${name}:</strong> ${review}</p>`;
      reviewsContainer.innerHTML += reviewHTML;
      document.getElementById('userName').value = '';
      document.getElementById('userReview').value = '';
    } else {
      alert('Please enter both name and review!');
    }
  }
  // Add to Cart and Save to LocalStorage
function addToCart(button, product) {
    button.textContent = "Added to Cart ✓";
    button.classList.remove('btn-success');
    button.classList.add('btn-secondary');
  
    // Store to LocalStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.classList.remove('btn-secondary');
      button.classList.add('btn-success');
    }, 1500);
  }
  