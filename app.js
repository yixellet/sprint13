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
app.use('/users', users);

app.use((req, res, next) => {
  req.user = {
    _id: '5f2bae03d5f98a183cdc46a0',
  };

  next();
});

app.use('/cards', cards);

app.listen(3000);
