const koa = require('koa')
const app = new koa()

function deely(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   // setTimeout(() => {
//     await next()
//   // }, 3000)
// })

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  let json = {"a": '1000'}
  await deely(3000)
  ctx.body = json
  await next()
})

app.listen('9000', () => {
  console.log('9000端口已经启动')
})