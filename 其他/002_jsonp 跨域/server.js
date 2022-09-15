const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

// jsonp 解决跨域的后端配置
app.get('/jsonp', (request, response) => {
  let { callback } = request.query
  let person = { name: 'jack', age: 18 }
  console.log(`${callback}(${JSON.stringify(person)})`)
  response.send(`${callback}(${JSON.stringify(person)})`)
})

app.listen(3030, () => {
  console.log('3030服务器已经启动')
})