require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = process.env.PORT || 5000;

serverConfig(app);

app.get('/', (req, res) => {
  res.send('TEST');
});
app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
