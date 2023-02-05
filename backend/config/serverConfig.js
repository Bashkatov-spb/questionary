require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const sessionConfig = require('./sessionConfig');

const config = (app) => {
  const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
  };

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cors(corsOptions));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(fileUpload());
};

module.exports = config;
