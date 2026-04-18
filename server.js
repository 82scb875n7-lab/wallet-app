const express = require('express');
const app = express();

// VERY IMPORTANT for Render
const PORT = process.env.PORT || 3000;

// Serve your HTML files
app.use(express.static('public'));

// Redirect root to login page
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
