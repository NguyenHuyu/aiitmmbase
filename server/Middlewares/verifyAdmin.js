export const verifyUserAdmin = (req, res, next)=>{
    verifyUser(req, res, ()=>{
        if(req.user.id == req.params.id || req.user.admin){
            next()
        }else{
            res.status(403).json("You're not admin")
        }
    })
}