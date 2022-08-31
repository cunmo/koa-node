const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  let json = {"a": '1000'}
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  setTimeout(() => {
    ctx.body = json
    // await next()
  }, 5000)
})

app.listen('9000', () => {
  console.log('9000端口已经启动')
})