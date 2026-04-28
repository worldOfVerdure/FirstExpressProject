import express from 'express';
import { fileURLToPath } from 'url';

export const router = express.Router();

router.get('/', (req, res, next) => {
  const filePath = fileURLToPath(new URL('../views/shop.html', import.meta.url));
  res.sendFile(filePath);
});
