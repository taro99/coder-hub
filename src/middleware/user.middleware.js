/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-13 20:03:54
 */
const errorType = require('../constants/error-types')
const service = require('../service/user.service')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    // 抛出错误
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_PASSWORD)
    return ctx.app.emit('error', error, ctx)
  }

  const result = await service.getUserByName(name)
  if (result.length) {
    // 抛出错误
    const error = new Error(errorType.USER_ALRAEDY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  await next()
}

module.exports = { verifyUser }
