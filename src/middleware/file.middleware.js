/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-10-03 21:20:45
 */

const Multer = require('koa-multer')

const avatarUpload = Multer({
  dest: './uploads/avatar',
})

const avatarHandler = avatarUpload.single('avatar')

module.exports = { avatarHandler }
