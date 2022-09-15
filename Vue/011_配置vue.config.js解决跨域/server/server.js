const express = require('express')
const app = express()

app.get('/get', (request, response) => {
  let person = { name: 'jack', age: 18 }
  response.send(JSON.stringify(person))
})

app.post('/post', (request, response) => {
  let person = { name: '张三', age: 24 }
  response.send(JSON.stringify(person))
})

app.listen(3030, () => {
  console.log('3030服务器已经启动')
})