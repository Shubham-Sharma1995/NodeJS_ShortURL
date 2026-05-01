// const sessionIdToUserMap = new Map();

// function setUserId(id, user) {
//     sessionIdToUserMap.set(id, user)
// }

// function getUser(id) {
//     return sessionIdToUserMap.get(id)
// }

// module.exports = {
//     setUserId,
//     getUser
// }


//after using jwt

const jwt = require('jsonwebtoken')
const secret = "Piyush$123@$"
function setUser(user) {

    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret)
}

function getUser(token) {
    if (!token) return null
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        return null
    }
}

module.exports = {
    setUser,
    getUser
}