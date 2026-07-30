import express from 'express';
import { getSafePath } from '../util/path.ts';

export const router = express.Router();

router.use((req, res, next) => {
  const filePath = getSafePath('views/404.html');
  res.status(404).sendFile(filePath);
});
