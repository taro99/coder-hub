/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-12 21:33:10
 */
class UserService {
  async create(user) {
    console.log(user)
    return '用户创建成功'
  }
}

module.exports = new UserService()
