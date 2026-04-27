import express from 'express';
/*
This router is like a mini express app tied to the other express app or pluggable into the other
express app which we can export here.
*/
export const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // console.log('In an add product middleware!', req.url);
  res.send('<form action="/product" method="POST"><input type="text" name="title"/><button>Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
  /* By default, request doesn't try to parse the body. We need to register body-parser middleware
  to handle it. See the above middleware. Note this parser middleware should be registered before
  any route that needs to access req.body; hence, being before the route handlers. To get this
  functionality, we install: $ npm install --save body-parser */
  console.log(req.body);
  res.redirect('/');
});
