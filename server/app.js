const express = require('express')
const bodyParser = require('body-parser')


require('dotenv').config()

app = express()

// Middleware
app.use(bodyParser.json())
app.use(express.static('build'))

// Intialize port
const port = process.env.PORT || 3006
app.listen(port, () => {
  console.log(`ask-openai is currently listening at ${port}`)
})

// Routes
app.get('/', async (request, response) => {
  console.log(`The client is requesting an update on the Heroku App`)

  response.json('ask-openai App is working 👨🏾‍🍳')
})