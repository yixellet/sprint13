const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/(www\.)?([\w-]+\.[a-z]+|(\d{1,3}\.){3}\d{1,3})((:[0])|(:[1-9]{1}([\d]{1,4})?))?((\/[\w-]{1,}#?){1,})?(\/)?/.test(v);
      },
      message: props => `${props.value} неверный URL`
    }
  }
});

module.exports = mongoose.model('user', userSchema);
