const mongoose = require('mongoose');

const uris = 'mongodb://localhost:27017/istation';
const options = {
    useNewUrlParser: true
};
mongoose.connect(uris, options);
mongoose.Promise = global.Promise;

module.exports = mongoose;