const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')
// const mongoose = require('mongoose')


router.get('/signup', ctrl.accountsCtrl.newUser)


module.exports = router