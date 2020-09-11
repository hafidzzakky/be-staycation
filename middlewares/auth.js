const isLogin= (req, res, next) => {
    if(req.session.user === null || req.session.user === undefined){
        req.flash("alertMessage", "You dont have any session, please re login ");
        req.flash("alertStatus", "info");
        res.redirect('/admin/signin');
    }else{
        next();
    }
}

module.exports = isLogin; 