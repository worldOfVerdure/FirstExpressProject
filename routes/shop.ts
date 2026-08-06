import express from 'express';
//data
import * as adminData from './admin.ts';
//utility function
// import { getSafePath } from '../util/path.ts';

export const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop');
  // console.log(adminData.products);
  // const filePath = getSafePath('views/shop.html');
  // res.sendFile(filePath);
});
