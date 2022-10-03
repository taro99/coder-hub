const momentService = require('../service/moment.service')
class MomentController {
  // 发表动态
  async create(ctx, next) {
    // 1. 获取数据（user_id,content）
    const userId = ctx.user.id
    const content = ctx.request.body.content
    console.log(userId, content)
    // ctx.body = '发表动态成功~'

    // 2. 将数据写入到数据库
    const result = await momentService.create(userId, content)
    ctx.body = result
  }
  // 查询单条数据
  async detail(ctx, next) {
    //  1. 获取单个动态数据
    const momentId = ctx.params.momentId
    const result = await momentService.getMomentById(momentId)
    ctx.body = result
  }
  // 查询全部数据
  async list(ctx, next) {
    const { offset, pageSize } = ctx.query
    const result = await momentService.getMomentByList(offset * 10, pageSize)
    ctx.body = result
  }
}

module.exports = new MomentController()
