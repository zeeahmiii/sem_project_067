var express = require('express');
var router = express.Router();
var Product = require("../model/product");
var checkSessionAuth = require("../middleware/checkSessionAuth")

/* GET home page. */
router.get('/', async function (req, res, next) {
  let product = await Product.find();
  console.log(req.session.user);
  res.render('product/list',{title:"Product in DB",product});
});


router.get('/api', async function (req, res, next) {
  let product = await Product.find();
  console.log(req.session.user);
  res.send(product);
});

router.get('/add',checkSessionAuth, async function (req, res, next) {
  res.render('product/add',);
});
// store data in db
router.post('/add', async function (req, res, next) {
  let product=new Product(req.body);
  await product.save();
    res.redirect('/product');
});

router.get('/delete/:id', async function (req, res, next) {
  let product =  await Product.findByIdAndDelete(req.params.id);
 res.redirect('/product');
});

router.get('/cart/:id', async function (req, res, next) {
  let product =  await Product.findById(req.params.id);
  let cart=[];
  if(req.cookies.cart) 
  cart = req.cookies.cart;
  cart.push(product);
  res.cookie("cart",cart)
 res.redirect('/product');
});

router.get('/cart/remove/:id', async function (req, res, next) {
  
  let cart=[];
  if(req.cookies.cart) 
  cart = req.cookies.cart;
  cart.splice(cart.findIndex(c=>c._id==req.params.id),
  1);
  res.cookie("cart",cart)
 res.redirect('/cart');
});

router.get('/edit/:id', async function (req, res, next) {
  let product =  await Product.findById(req.params.id);
 res.render('product/edit',{ product });
});

router.post('/edit/:id', async function (req, res, next) {
  let product =  await Product.findById(req.params.id);
  product.Name=req.body.Name;
  product.Price=req.body.Price;
  product.Model=req.body.Model;
  await product.save();


 res.redirect('/product');
});



module.exports = router;
