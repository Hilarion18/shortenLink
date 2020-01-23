const User = require("../models/user")
const jwt = require("jsonwebtoken")


function isLogin(req,res, next) {
  console.log('isLogin ===== ini req headers', req.headers);
  console.log('isLogin ===== ini req data', req.data);
  
let decoded = jwt.verify(req.headers.token, process.env.JWT_TOKEN, (err, decoded) => {
  if ( err ) {
    console.log((err));
    res.status(401).json({
      message: `You're not a user`
    })
  }
  else {
    
    req.data = decoded
    console.log(`ini req data login `, req.data);
    console.log(req.data, `it's isLogin`);
    next()
  }
})
}


module.exports = isLogin