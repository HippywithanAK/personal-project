const express = require('express')
const db = ('../db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})