const express = require('express');
const app = express();
const path = require('path');

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
});

app.listen(process.env.PORT || 3000);
