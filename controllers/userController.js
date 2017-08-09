const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.login = (req, res) => {
    res.render('login', {title: 'Login'})
}

