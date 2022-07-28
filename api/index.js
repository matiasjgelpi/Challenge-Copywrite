const express = require('express')
const cors = require('cors')
const app = express()

const {
  reverseText,
  noEndpointReached
} = require('./controllers/controllers')

app.use(cors())
app.use(express.json())


app.get('/iecho', reverseText)

app.use('/', noEndpointReached)

const server = app.listen(4000, () => {
  console.log('Server is running on port 4000')
})

module.exports = { app, server }
