const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//!login
router.get('/login', (req, res) => {
    res.send('hey from login')
})
router.get('/register', (req, res) => {
    res.send('hey from register')
})

module.exports = router;
