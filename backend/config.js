const mongoose = require ('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/pustak")

//iframe configuration
var express = require('express')
var app = express()
var xFrameOptions = require('x-frame-options')

app.use(xFrameOptions())

app.get('/', function (req, res) {
  res.get('X-Frame-Options') // === 'Deny'
})

// app.listen(3000)
// var xFrameOptions = require('x-frame-options')
xFrameOptions(headerValue = 'Deny');
  