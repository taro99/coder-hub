/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-09 07:40:53
 */
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()


const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'))

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))


module.exports = { PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env


module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY

