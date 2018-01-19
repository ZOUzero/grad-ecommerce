const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.route('/test')
  .get((req, res, next) => {
    res.send('Test!')
  })

module.exports = {
  index: router
}
