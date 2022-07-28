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

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = { app, server }
