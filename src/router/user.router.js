/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-12 21:41:58
 */

// 注册接口

const Router = require('koa-router')
const { create, avatarInfo } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', verifyUser, handlePassword, create)
userRouter.get('/:userId/avatar', avatarInfo)

module.exports = userRouter
