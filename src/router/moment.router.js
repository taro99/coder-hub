/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-26 22:20:38
 */
const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })

const { create } = require('../controller/moment.controller')

const { verifyAuth } = require('../middleware/auth.middleware')

momentRouter.post('/', verifyAuth, create)

module.exports = momentRouter
