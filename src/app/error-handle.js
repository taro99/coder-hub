/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-13 20:35:58
 */
const errorType = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_PASSWORD:
      status = 400
      message = '用户名或密码不能为空'
      break
    case errorType.USER_ALRAEDY_EXISTS:
      status = 409
      message = '用户名存在'
      break
    case errorType.USER_NOT_EXISTS:
      status = 400
      message = '用户名不存在'
      break
    case errorType.PASSWORD_IS_ERROR:
      status = 400
      message = '用户名或密码错误'
      break
    case errorType.AUTHORIZATION:
      status = 401
      message = '用户登录未授权'
      break
    case errorType.PERMISSION:
      status = 401
      message = '当前用户没有修改权限~'
      break

    default:
      status = 404
      message = 'NOT FOUND'
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
