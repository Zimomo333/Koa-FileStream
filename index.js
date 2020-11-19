const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

app.use(async ctx => {
  const fileData = fs.createReadStream('./test.xlsx')
  ctx.response.set(
    'content-type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  )
  ctx.response.set('Content-Disposition', 'attachment;filename=test.xlsx')
  ctx.body = fileData
})

app.listen(3000)
