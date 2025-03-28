function logout() {
    fetch('/logout', {
      method: 'POST'
    })
    .then(() => {
      alert('Logged out successfully!');
      window.location.href = 'login.html';
    })
    .catch(error => console.error('Error:', error));
  }