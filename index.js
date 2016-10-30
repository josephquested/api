var express = require('express')
var db = require('./db')
var app = express()

app.get('/', (req, res) => {
  res.send(require('./views/main'))
})

// CLIENT FACING

app.get('/robots', (req, res) => {
  db.getAll('robots', (err, data) => {
    if (err) return console.log(`ERROR: ${err}`)
    res.send(require('./views/robots')(data))
  })
})

app.get('/robots/:id', (req, res) => {
  db.getOneById('robots', req.params.id, (err, data) => {
    if (err) return console.log(`ERROR: ${err}`)
    res.send(require('./views/oneRobot')(data[0]))
  })
})

// API //

// GET METHODS
app.get('/api/robots', (req, res) => {
  db.getAll('robots', (err, data) => {
    if (err) return console.log(`ERROR: ${err}`)
    res.send(data)
  })
})

app.get('/api/robots/:id', (req, res) => {
  db.getOneById('robots', req.params.id, (err, data) => {
    if (err) return console.log(`ERROR: ${err}`)
    res.send(data)
  })
})

app.listen(3000)
console.log("robots somewhat alive on port 3000")
