import express from 'express';
import { getPath } from '../util/path.ts';

export const router = express.Router();

router.use((req, res, next) => {
  const filePath = getPath('../views/404.html');
  res.status(404).sendFile(filePath);
});
