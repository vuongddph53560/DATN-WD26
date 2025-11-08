import User from "../models/User.js";

//middleware kiem tra user da duoc xac thuc chua
export const protect = async (req, res, next) => {
    const {userId} = req.auth;
    if(!userId){
        res.json({success: false, message: "Not authorized"});
    }else{
        const user = await User.findById(userId);
        req.user = user;
        next();
    }

};