import jwt from "jsonwebtoken"
const SECRET_KEY = "AUTHFULLSTACK"
const generateToken = (user)=>{
    const payload = {
        username:user.username,
        password:user.password
    }
    const token = jwt.sign(payload,SECRET_KEY,{ expiresIn: '30d' });
    return token;
}
const verifyToken  = async(req,res,next)=>{
   const token = req.cookies.authtoken;
   if(!token){
    res.redirect("/login");
   }
   else{
    const cleanToken = token.trim();
    const decodedData = jwt.verify(token,SECRET_KEY);
    req.user = decodedData;
    next();
   }
}

export {generateToken,verifyToken}