/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-09 07:40:53
 */
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.PORT)

module.exports = { PORT } = process.env
