import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import UserController from '../controllers/userControler.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'avatars',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [{ width: 300, height: 300, crop: 'fill' }],
    },
});

const upload = multer({ storage });

// User routes
router.post('/signUp', upload.single('avatar'), UserController.createUser);
router.post('/login', UserController.login);
// router.get('/getUser', auth, UserController.getUser);
router.put('/updateUser', upload.single('avatar'), auth, UserController.updateUser);
// router.delete('/deleteUser', auth, UserController.deleteUser);

export default router;
