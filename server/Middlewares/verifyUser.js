import jwt from "jsonwebtoken"

export const verifyUser = (req, res, next)=>{
    const token = req.cookies.access_token
    if(token){
        const access_token = token.split(" ")[1]
        jwt.verify(access_token, process.env.JWT, (err,user)=>{
            if(err)
                return res.status(403).json("Token is not valid")
            req.user = user
            next()
        })
    }else{
        res.status(401).json(401).json("You're not auth")
    }
}


