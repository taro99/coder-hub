/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-10-02 13:50:56
 */

const connections = require('../app/database')

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?)`
    const [result] = await connections.execute(statement, [content, userId])
    return result
  }

  async getMomentById(userId) {
    // console.log(userId)
    const statement = `SELECT 
    m.id id,
    m.content content,
    m.createAt createTime,
    m.updateAt updateTime,
    JSON_OBJECT('id',u.id,'name',u.userName) author 
    FROM moment m LEFT JOIN user u ON m.user_id = u.id 
    WHERE m.id = ?`
    const [result] = await connections.execute(statement, [userId])
    return result[0]
  }
  async getMomentByList(offset, pageSize) {
    const statement = `SELECT 
    m.id id,
    m.content content,
    m.createAt createTime,
    m.updateAt updateTime,
    JSON_OBJECT('id',u.id,'name',u.userName) author 
    FROM moment m LEFT JOIN user u ON m.user_id = u.id 
    LIMIT ?, ?`
    const [result] = await connections.execute(statement, [offset, pageSize])
    return result
  }
  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?`
    const [result] = await connections.execute(statement, [content, momentId])
    return result
  }
}

module.exports = new MomentService()
