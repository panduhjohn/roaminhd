const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main/index');
});

router.get('/about', (req, res) => {
    res.render('main/about')
})

module.exports = router;
