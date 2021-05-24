const express = require('express');

const AppCtrl = require('../controllers/applaudsctrl')
const applauds =  require('../models/applaudsmodel')
const contact = require('../models/contactModel')
const {auth,isAdmin} = require('../config/auth')
const router = express.Router() 


router.post('/create',[applauds.uploadAvatar,auth], AppCtrl.createApplaud);
router.get('/home',auth,AppCtrl.getApplauds);
router.post('/register',AppCtrl.userSignUp)
router.post('/signin',AppCtrl.userSignin);
router.post('/contact',contact.uploadAttachment,AppCtrl.contactCtrl);
router.get('/getcontacts',AppCtrl.contactListCtrl);

module.exports = router
