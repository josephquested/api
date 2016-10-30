var express = require('express')
var bodyParser = require('body-parser')
var db = require('./db')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send(require('./views/main'))
})

// CLIENT FACING

app.get('/robots', (req, res) => {
  db.getAll('robots', (err, data) => {
    if (err) res.status(404).send(err)
    res.send(require('./views/robots')(data))
  })
})

app.get('/robots/:id', (req, res) => {
  db.getOneById('robots', req.params.id, (err, data) => {
    if (err) res.status(404).send(err)
    res.send(require('./views/one-robot')(data[0]))
  })
})

app.get('/robots/edit/:id', (req, res) => {
  db.getOneById('robots', req.params.id, (err, data) => {
    if (err) res.status(404).send(err)
    res.send(require('./views/edit-robot')(data[0]))
  })
})

// API //

// GET METHODS
app.get('/api/robots', (req, res) => {
  db.getAll('robots', (err, data) => {
    if (err) res.status(404).send(err)
    res.send(data)
  })
})

app.get('/api/robots/:id', (req, res) => {
  db.getOneById('robots', req.params.id, (err, data) => {
    if (err) res.status(404).send(err)
    res.send(data)
  })
})

// POST METHODS
app.post('/robots', (req, res) => {
  db.createRobot(req.body, (err, index) => {
    if (err) res.status(404).send(err)
    console.log(`sucessfully added robot ${index}`)
    res.redirect(`/robots/${index}`)
  })
})

app.post('/robots/:id', (req, res) => {
  db.updateRobot({name: req.body.name, id: req.params.id}, (err, index) => {
    if (err) res.status(404).send(err)
    console.log(`sucessfully added robot ${index}`)
    res.redirect(`/robots`)
  })
})

app.post('/robots/delete/:id', (req, res) => {
  db.deleteRobot(req.params, (err, index) => {
    if (err) res.status(404).send(err)
    console.log(`sucessfully deleted robot ${index}`)
    res.redirect(`/robots`)
  })
})

app.listen(3000)
console.log("robots somewhat alive on port 3000")
