const path = require('path'),
  express = require('express');
(router = express.Router()),
    (camp_controller = require('../controllers/CampController')),
    

//create round
router.post('/campground/new', camp_controller.campground_create);


module.exports = router;
