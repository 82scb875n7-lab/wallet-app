const express = require('express');
const path = require('path');

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// fix root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// VERY IMPORTANT (Render port)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
