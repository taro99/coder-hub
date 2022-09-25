/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-19 20:35:44
 */
const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

const verifyLogin = async (ctx, next) => {
  // 1. 判断用户是否存在
  const { name, password } = ctx.request.body
  const result = await service.getUserByName(name)
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

module.exports = { verifyLogin }
