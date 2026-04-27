import express from 'express';
import path from 'path';

export const router = express.Router();

router.get('/', (req, res, next) => {
  //Allows us to send a response. This allows us to send a body of type any.
  res.sendFile(path.join());//!zzz Contineu from lecture 70, 3:00.
});
