/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-09 07:35:40
 */

const Koa = require('koa')

const Router = require('koa-router')

const app = new Koa()

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', (ctx, next) => {
  console.log('12345');
  ctx.body = '创建用户成功~'
})

app.use(userRouter.routes())

app.use(userRouter.allowedMethods())

module.exports = app
