import express from 'express';

const router = express.Router();
import userController from '../controllers/user.js';

// user GET

router.get("/users",userController.getAllUser);
router.post("/users",userController.createUser);

// single data GET. dynamic routing.
router.get("/users/single/:id",userController.getSingleUser);


// edit & update
router.put("/users/:id",userController.updateUser);

// delete
router.delete("/users/:id",userController.deleteUser);

export default router;