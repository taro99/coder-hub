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
    default:
      status = 404
      message = 'NOT FOUND'
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler