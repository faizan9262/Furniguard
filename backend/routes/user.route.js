import express from 'express';
import { loginUser, registerUser, refreshToken, admiLogin } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/refresh-token', refreshToken); // Route to refresh access token
userRouter.post('/admin', admiLogin); // Route to refresh access token

export default userRouter;
