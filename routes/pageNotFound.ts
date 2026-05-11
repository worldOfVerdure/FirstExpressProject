import express from 'express';
import { fileURLToPath } from 'url';

export const router = express.Router();

router.use((req, res, next) => {
  const filePath = fileURLToPath(new URL('../views/404.html', import.meta.url));
  res.status(404).sendFile(filePath);
});
