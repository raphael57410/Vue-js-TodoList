const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String },
    password: { type: String },
},
    //{_id: false, timestamp: false}
);

module.exports = mongoose.model('User', userSchema);