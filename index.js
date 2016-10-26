var express = require('express')
var data = require('./data')
var app = express()

app.get('/', (req, res) => {
  res.send(require('./views/main'))
})

// CLIENT FACING

app.get('/robots', (req, res) => {
  res.send(require('./views/robots')(data))
})

app.get('/robots/:id', (req, res) => {
  res.send(require('./views/oneRobot')(data[req.params.id]))
})

// API

app.get('/api/robots', (req, res) => {
  res.send(data)
})

app.get('/api/robots/:id', (req, res) => {
  res.send(data[req.params.id])
})

app.listen(3000)
console.log("robots somewhat alive on port 3000")
