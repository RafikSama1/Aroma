const {model} = require('mongoose');

module.exports = model('Recepe', {
    title: String,
    image_url: String,
    ingredients: Array,
    instructions: Array,
    video_link: String
});