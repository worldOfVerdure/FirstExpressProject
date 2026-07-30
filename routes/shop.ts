import express from 'express';
import { getSafePath } from '../util/path.ts';

export const router = express.Router();

router.get('/', (req, res, next) => {
  const filePath = getSafePath('views/shop.html');
  res.sendFile(filePath);
});
