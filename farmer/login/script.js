function submitForm(action) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic Validation
    if (!username || !password) {
      alert('All fields are required');
      return;
    }
  
    // Handle Login or Signup using Fetch API
    fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, action })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
  }
  