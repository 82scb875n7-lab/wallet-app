const express = require('express');
const app = express();

// IMPORTANT: use Render port
const PORT = process.env.PORT || 3000;

// Serve static files (your HTML)
app.use(express.static('public'));

// Redirect home to login page
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
