import jwt from "jsonwebtoken";

export const verifyJwt = async (req,res,next) => {
    try {
        const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        if(!token){
            return res.status(400).json({
                success: false,
                message: "Token Missing"
            })
        }
        try {
            const userId = jwt.verify(token, process.env.JWT_SECRET);
            req.user=userId;
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Expired Token"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while verifying Token"
        })
    }
}