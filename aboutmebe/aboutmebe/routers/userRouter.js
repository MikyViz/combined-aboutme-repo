import express from 'express';
import multer from 'multer';
import UserController from '../controllers/userControler.js';
import path from 'path';
import auth from '../middlewares/auth.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './imgs'); 
    },
    filename: function (req, file, cb) {
        const uniqueFileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueFileName);
    }
  });
  const upload = multer({ storage: storage });

// User routes
router.post('/signUp', upload.single('avatar'), UserController.createUser);
router.post('/login', UserController.login);
// router.get('/getUser', auth, UserController.getUser);
// router.put('/updateUser', auth, UserController.updateUser);
// router.delete('/deleteUser', auth, UserController.deleteUser);

export default router;
