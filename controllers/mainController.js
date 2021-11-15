const model = require('../models/main');

exports.index = (req, res, next)=>{
    res.render('./index');
};

exports.about = (req, res)=>{
    res.render('./about');
};

exports.contact = (req, res)=>{
    res.render('./contact');
};

exports.login = (req, res)=> {
    res.render('./login');
};

exports.signup = (req, res)=> {
    res.render('./sign-up');
};