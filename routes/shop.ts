import express from 'express';

export const router = express.Router();

router.get('/', (req, res, next) => {
  //Allows us to send a response. This allows us to send a body of type any.
  res.send('<h1>Hello from Express!</h1>');
});
