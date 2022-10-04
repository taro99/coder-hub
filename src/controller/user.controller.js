/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-12 19:44:33
 */

const userService = require('../service/user.service')
const fileService = require('../service/file.service')
const fs = require('fs')
const crypto = require('crypto')

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body
    const result = await userService.create(user)
    ctx.body = result
  }
  async avatarInfo(ctx, next) {

    // 1. 获取用户上传头像
    const { userId } = ctx.params
    const result = await fileService.getAvatarByUserId(userId)

    // 2. 提供图像信息
    ctx.response.set('content-type', result.minetype)
    ctx.body = fs.createReadStream(`./uploads/avatar/${result.filename}`)
  }
}

module.exports = new UserController()
