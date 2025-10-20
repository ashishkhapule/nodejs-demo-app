const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js Demo App! CI/CD Pipeline is working fine..');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is healthy ✅' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
