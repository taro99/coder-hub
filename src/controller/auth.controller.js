/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-19 20:07:22
 */
class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body
    ctx.body = `登录成功，欢迎${name}回来~`
  }
}
module.exports = new AuthController()