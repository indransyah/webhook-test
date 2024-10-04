const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const text = `Connected at ${hours}:${minutes}`
  console.log(text)
  res.send(text)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
