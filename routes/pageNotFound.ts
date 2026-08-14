import express from 'express';
import { getSafePath } from '../util/path.ts';

export const router = express.Router();

router.use((req, res, next) => {
  res.status(404).render('404', {docTitle: 'Page Not Found'});
  // res.status(404).sendFile(filePath);
});
