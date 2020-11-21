const Koa = require('koa')
const fs = require('fs')
const cors = require('koa2-cors') // 允许跨域

const app = new Koa()
app.use(cors())

app.use(async ctx => {
  var fileName = 'test.xlsx'
  const fileData = fs.createReadStream('./' + fileName)
  ctx.response.set('filename', fileName)
  ctx.response.set('Access-Control-Expose-Headers', 'filename') // 允许自定义响应头
  ctx.body = fileData
})

app.listen(3000)
