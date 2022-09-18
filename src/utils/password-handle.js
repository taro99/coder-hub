// Includes crypto module
const crypto = require('crypto')

const md5password = (password) => {
  let userPwd = password.toString()
  // Calling createHash method
  const hash = crypto
    .createHash('md5')

    // updating data
    .update(userPwd)

    // Encoding to be used
    .digest('hex')

  return hash
}

module.exports = md5password
