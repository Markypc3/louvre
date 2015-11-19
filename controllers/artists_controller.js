let express = require('express');
let router = express.router();

router.route('/')
  .get((req, res, next) => {
    res.send('hello world');
  })









module.exports = router;
