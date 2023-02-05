require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

serverConfig(app);

app.use('/api', indexRouter);

app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
