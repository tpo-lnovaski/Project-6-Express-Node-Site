const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects

router.get('/', (req, res) => {
  res.render('index'), projects;
});

router.get('/', (req, res) => {
  console.log('hello world');
});

module.exports = router;