const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser());

app.use((req, res, next) => {
  req.user = {
    _id: '5f2bf00b1125ef2608a03132',
  };

  next();
});

app.use('/users', users);

app.use('/cards', cards);

app.listen(3000);
