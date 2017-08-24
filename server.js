const express = require('express');
const bodyParser= require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/signup', (req, res) => {
  console.log(req.body)
})

// Start Express Server
app.listen(3000, () => {
    console.log('App is running at http://localhost:3000')
  })