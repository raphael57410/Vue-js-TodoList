const User = require('../models/User');

exports.findUser = (email) => {
    return User.find({ email: email }).exec();
}