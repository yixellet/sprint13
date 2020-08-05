const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
          return /^https?:\/\/(www\.)?([\w-]+\.[a-z]+|(\d{1,3}\.){3}\d{1,3})((:[0])|(:[1-9]{1}([\d]{1,4})?))?((\/[\w-]{1,}#?){1,})?(\/)?/.test(v);
      },
      message: props => `${props.value} неверный URL`
  }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes: {
      type:[mongoose.Schema.Types.ObjectId],
      default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('card', cardSchema);
