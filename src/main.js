/*
 * @Author: kcons 193791789@qq.com
 * @Date: 2022-09-09 07:20:35
 */
const app = require('./app')

const config = require('./app/config')

app.listen(config.PORT, () => {
  console.log(`server runing on  ${config.PORT}`)
})
