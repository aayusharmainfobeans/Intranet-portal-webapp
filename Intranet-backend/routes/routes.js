const express = require('express');

const AppCtrl = require('../controllers/applaudsctrl')

const router = express.Router()


router.post('/create',AppCtrl.createApplaud);
router.get('/home',AppCtrl.getApplauds);

module.exports = router
