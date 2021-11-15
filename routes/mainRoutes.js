const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/contact', controller.contact);

router.get('/login', controller.login);

router.get('/sign-up', controller.signup);

module.exports = router;