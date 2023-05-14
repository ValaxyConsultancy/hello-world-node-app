const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! How are you doing');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});