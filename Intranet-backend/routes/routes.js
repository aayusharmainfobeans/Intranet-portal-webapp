const express = require('express');

const AppCtrl = require('../controllers/applaudsctrl')
const auth = require('../config/auth')

const router = express.Router()


router.post('/create',AppCtrl.createApplaud);
router.get('/home',auth,AppCtrl.getApplauds);
router.post('/register',AppCtrl.userSignUp)
router.post('/signin',AppCtrl.userSignin);

module.exports = router
