const express = require('express');
const app = express();
const port = 3000;

app.get('/travel', (req, res) => {
  res.send('My favourite place - Greece.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
