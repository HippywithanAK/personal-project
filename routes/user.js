const express = require('express')
const db = ('../db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  db.addUser(req.body.username, req.body.password, req.body.reenter, req.body.firstname, req.body.surname, req.body.email, req.body.prefrole)
})

module.exports = router