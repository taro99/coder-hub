/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-10-03 21:26:50
 */
const fileService = require('../service/file.service')

class fileController {
  async saveAvatarInfo(ctx, next) {
    // 1. 获取图像相关的信息
    console.log(ctx.req.file)
    const { filename, mimetype, size } = ctx.req.file
    const { id } = ctx.user
    // 2.
    const result = await fileService.createAvatar(filename, mimetype, size, id)
    ctx.body = result
  }
}
module.exports = new fileController()
