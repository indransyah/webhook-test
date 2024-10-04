const express = require('express')
const app = express()
const port = 3113

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  res.send(`Connected at ${hours}:${minutes}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
