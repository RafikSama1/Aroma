const {model} = require('mongoose');

module.exports = model('user', {
    name: String,
    email: String,
    password: String
});