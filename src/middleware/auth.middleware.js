/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-19 20:35:44
 */
const errorType = require('../constants/error-types')
const UserService = require('../service/user.service')
const AuthService = require('../service/auth.service')
const md5password = require('../utils/password-handle')
const jwt = require('jsonwebtoken')
const { PUBLIC_KEY } = require('../app/config')

const verifyLogin = async (ctx, next) => {
  // 1. 判断用户是否存在
  const { name, password } = ctx.request.body
  const result = await UserService.getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(errorType.USER_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  // 2. 判断密码是否和数据中的一致
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_ERROR)
    return ctx.app.emit('error', error, ctx)
  }
  ctx.user = user
  await next()
}

const verifyAuth = async (ctx, next) => {
  console.log('验证授权的middleware~')
  // 1. 获取token
  const authorization = ctx.headers.authorization
  if (!authorization) {
    const error = new Error(errorType.AUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }

  const token = authorization.replace('Bearer ', '')
  // 2. 验证token

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'],
    })
    ctx.user = result
    await next()
  } catch {
    const error = new Error(errorType.AUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }
}

const verifyPermission = async (ctx, next) => {
  console.log('验证权限的middleWare')

  // 1. 获取参数

  const { momentId } = ctx.params
  const { id } = ctx.user

  // 2.查询是否具备权限

  const isPermission = await AuthService.checkMoment(momentId, id)
  if (!isPermission) {
    const error = new Error(errorType.PERMISSION)
    return ctx.app.emit('error', error, ctx)
  }
  await next()
}

module.exports = { verifyLogin, verifyAuth, verifyPermission }
