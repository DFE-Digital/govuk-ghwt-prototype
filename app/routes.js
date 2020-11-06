const express = require('express')
const router = express.Router()
const parseurl = require('parseurl')
const session = require('express-session')
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

router.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})

// output url for session data
router.get('/start', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/ghwt-support-confirm'] + ' times')
})

router.get('/start', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/ghwt-support-part1-describe'] + ' times')
})


module.exports = router
