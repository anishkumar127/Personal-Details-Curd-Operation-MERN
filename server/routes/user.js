import express from 'express';

const router = express.Router();
import userController from '../controllers/user.js';

// user GET

router.get("/users",userController.getAllUser);

export default router;