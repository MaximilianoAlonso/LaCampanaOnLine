module.exports = (req,res,next) => {
    if(req.cookies.forSale){
        req.session.userLogin = req.cookies.forSale

    }

    next()
}
