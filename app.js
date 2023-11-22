// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to handle GET request
app.get('/', (req, res) => {
  res.send('Hello, this is the home route!');
});

// Route to handle POST request
app.post('/post', (req, res) => {
  const { body } = req;
  // Access posted data from req.body
  res.send(`Received data: ${JSON.stringify(body)}`);
});

// Route to handle query parameters
app.get('/query', (req, res) => {
  const { query } = req;
  // Access query parameters from req.query
  res.send(`Received query parameters: ${JSON.stringify(query)}`);
});

// Route to handle dynamic URL parameters
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  // Access dynamic URL parameters from req.params
  res.send(`User ID: ${id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

