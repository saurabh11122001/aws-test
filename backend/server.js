const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
  console.log('GET request received at /');
});
app.get('/saurabh', (req, res) => {
  res.send('Hello from Saurabh Yahoooo!');
  console.log('GET request received at /');
});
app.get('/delete', (req, res) => {
  res.send('Deleted ......!');
  console.log('GET request received at /');
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
