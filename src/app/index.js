/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-09 07:35:40
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const errorHandler = require('./error-handle')
const useRoutes = require('../router/index')

const app = new Koa()

app.use(bodyParser())
useRoutes(app)

app.on('error', errorHandler)

module.exports = app
