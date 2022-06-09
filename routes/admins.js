var express = require('express');
var router = express.Router();
var Admin = require("../model/admin");

router.get('/login', function (req, res, next) {
    res.render('admins/login');
  });

  router.post('/login', async function (req, res, next) {
    let admin = await Admin.findOne({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    console.log(req.body)
    console.log(req.body)
    console.log(admin);
    

    
    if (!admin) return res.redirect("/login")
    req.session.admin = admin;
    return res.redirect('/product');
  });
  module.exports = router;