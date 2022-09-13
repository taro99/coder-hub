/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-12 19:44:33
 */

const service = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    console.log(ctx)
    const user = ctx.request.body
    const result = await service.create(user)
    ctx.body = result
  }
}

module.exports = new UserController()
