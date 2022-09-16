/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-12 21:33:10
 */
const connections = require('../app/database')

class UserService {
  async create(user) {
    // console.log('user', user)
    const { name, password } = user
    const statement = `INSERT INTO user (userName,password) VALUES (?,?)`
    const result = await connections.execute(statement, [name, password])
    return result[0]
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE userName = ?`
    const result = await connections.execute(statement, [name])
    return result[0]
  }
}

module.exports = new UserService()
