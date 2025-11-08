import User from "../models/User";

export const protect = async (req, res, next) => {
    const {useId} = req.auth;
    if (!useId) {
        res.json({success: false, message: "not authticated"})
    } else {
        const user = await User.findById(useId);
        req.user = user;
        next()
    }
}