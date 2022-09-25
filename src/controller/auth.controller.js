/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-19 20:07:22
 */
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class AuthController {
  async login(ctx, next) {
    console.log(ctx.user)
    const { id, userName } = ctx.user

    const token = jwt.sign({ id, userName }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })

    ctx.body = {
      id,
      userName,
      token,
    }
  }
}
module.exports = new AuthController()
