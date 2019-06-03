const path = require('path'),
  express = require('express');
(router = express.Router()),
  (camp_controller = require('../controllers/CampController.js')),
  (userController = require('../controllers/AuthUserController.js')),
  (campService = require('../controllers/CampService.js'));

//Auth Routes
router.get('/register', (req, res) => {
  res.render('user_register');
});
