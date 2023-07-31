const express = require('express');
const app = express();

let token = 0;

// API endpoint to retrieve the current token value
app.get('/api/token', (req, res) => {
  res.json({ token });
});

// Increment the token every 20 seconds
setInterval(() => {
  token++;
}, 20000);

// Serve the HTML file
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});