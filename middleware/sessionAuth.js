function sessionAuth(req,res,next){
    //set variable for every pug file
    res.locals.user=req.session.user;
    next();
}

function sessionAuth(req,res,next){
    //set variable for every pug file
    res.locals.admin=req.session.admin;
    next();
}

module.exports=sessionAuth;