/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-10-03 21:26:50
 */
const fileService = require('../service/file.service')
const userService = require('../service/user.service')
const { HOST, PORT } = require('../app/config')

class fileController {
  async saveAvatarInfo(ctx, next) {
    console.log('111')
    console.log(ctx.req.file)
    // 1. 获取图像相关的信息
    const { filename, mimetype, size } = ctx.req.file
    const { id } = ctx.user
    // 2. 将图片信息存储到数据库中
    const result = await fileService.createAvatar(filename, mimetype, size, id)
    // 3. 将图片地址保存到user表中
    const avatarUrl = `${HOST}:${PORT}/users/${id}/avatar`
    await userService.updateAvatarUrlById(avatarUrl, id)
    // 返回结果
    ctx.body = { iCode: 200, strMsg: 'success' }
  }
}
module.exports = new fileController()
