const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//!login
router.get('/login', (req, res) => {
    res.render('main/login')
})
router.get('/register', (req, res) => {
    res.render('main/register')
})

module.exports = router;
