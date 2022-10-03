/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-10-03 17:09:51
 */
const connections = require('../app/database')

class AuthService {
  async checkMoment(momentId, userId) {
    console.log(momentId, userId)
    try {
      const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?`
      const [result] = await connections.execute(statement, [momentId, userId])
      console.log(result)
      return result.length === 0 ? false : true
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new AuthService()
