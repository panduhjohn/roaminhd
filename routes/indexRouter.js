const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main/index');
});

router.get('/test', (req, res) => {
    res.send('hey from test')
})

module.exports = router;
