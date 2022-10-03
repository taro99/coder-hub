/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-26 22:20:38
 */
const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })

const { create, detail, list, update, remove } = require('../controller/moment.controller')

const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware')

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
module.exports = momentRouter
