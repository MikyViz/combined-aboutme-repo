import express from 'express';
import ReviewController from '../controllers/reviewControler.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post('/add', auth, ReviewController.addReview);
router.get('/all', ReviewController.getAllReviews);

export default router;
