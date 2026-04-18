const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve all files in public folder
app.use(express.static(__dirname + '/public'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
