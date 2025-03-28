const express = require('express');
const app = express();
const port = 3000;
const users = [];

app.use(express.json());
app.use(express.static('.'));

app.post('/auth', (req, res) => {
  const { name, email, username, password, action } = req.body;

  if (action === 'Sign Up') {
    if (users.find(user => user.username === username)) {
      return res.json({ message: 'User already exists!' });
    }
    users.push({ name, email, username, password });
    return res.json({ message: 'Sign-up successful!' });
  }

  if (action === 'Login') {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      return res.json({ message: 'Login successful!' });
    }
    return res.json({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});