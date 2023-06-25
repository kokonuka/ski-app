const express = require('express');
const path = require('path');

const app = express();
const port = 3200;

app.use('/', express.static(path.join(__dirname, './ui')));
app.use("/ski-app.yaml", express.static(path.join(__dirname, "./ski-app.yaml")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});