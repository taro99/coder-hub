/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-09 07:35:40
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const userRouter = require('../router/user.router')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app
