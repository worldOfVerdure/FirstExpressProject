import express from 'express';
import { getPath } from '../util/path.ts';

export const router = express.Router();

router.get('/', (req, res, next) => {
  const filePath = getPath('../views/shop.html');
  res.sendFile(filePath);
});
