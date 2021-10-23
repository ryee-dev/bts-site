const express = require('express');
const router = express.Router();
const jsonData = require('../data/data.json');

//localhost:3000/
// router.get('/', (req, res) => {
//   // res.send('Home Page');
//   res.render('index', {
//
//   });
// });

router.get('/', (req, res) => {
  res.render('index', {data: jsonData});
});

module.exports = router;
