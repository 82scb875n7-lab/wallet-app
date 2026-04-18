const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname + '/public'));

// Default route → login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
