const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// USERS (your database for now)
let users = [
  {
    username: "john",
    password: "1234",
    balance: 5000,
    history: []
  }
];

// LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({
      success: true,
      username: user.username,
      balance: user.balance,
      history: user.history
    });
  } else {
    res.json({ success: false });
  }
});

// ADD MONEY (just save method, no real charge)
app.post('/add-money', (req, res) => {
  const { username } = req.body;

  const user = users.find(u => u.username === username);

  user.history.push("Payment method added");
  res.json({ success: true });
});

// TRANSFER
app.post('/transfer', (req, res) => {
  const { username, amount } = req.body;

  const user = users.find(u => u.username === username);

  user.history.push("Transfer request: $" + amount);

  res.json({ success: true });
});

// BUY BTC
app.post('/buy-btc', (req, res) => {
  const { username } = req.body;

  const user = users.find(u => u.username === username);

  user.history.push("Bitcoin purchase request");

  res.json({ success: true });
});

// WITHDRAW
app.post('/withdraw', (req, res) => {
  const { username } = req.body;

  const user = users.find(u => u.username === username);

  user.history.push("Withdrawal pending");

  res.json({
    success: true,
    message: "Withdrawal is pending and processing"
  });
});

// GET USER DATA
app.get('/user/:username', (req, res) => {
  const user = users.find(u => u.username === req.params.username);

  res.json(user);
});

app.listen(3000, () => console.log("Server running"));
