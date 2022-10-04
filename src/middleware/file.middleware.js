/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-10-03 21:20:45
 */

const path = require('path')

const Multer = require('koa-multer')
const Jimp = require('jimp')

const avatarUpload = Multer({
  dest: './uploads/avatar',
})

const avatarHandler = avatarUpload.single('avatar')

const pictureUpload = Multer({
  dest: './uploads/picture',
})

const pictureHandler = pictureUpload.array('picture', 9)

const pictureResize = async (ctx, next) => {
  // 获取所有的图像信息
  const files = ctx.req.files
  for (let file of files) {
    const destPath = path.join(file.destination, file.filename)
    Jimp.read(file.path).then((image) => {
      image.resize(1280, Jimp.AUTO).write(`${destPath}-large`)
      image.resize(640, Jimp.AUTO).write(`${destPath}-middle`)
      image.resize(320, Jimp.AUTO).write(`${destPath}-small`)
    })
  }
  await next()
}

module.exports = { avatarHandler, pictureHandler, pictureResize }
