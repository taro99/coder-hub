class MomentController {
  async create(ctx, create) {
    ctx.body = '发表动态成功~'
  }
}

module.exports = new MomentController()
