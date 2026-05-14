import express from 'express';
import ReviewController from '../controllers/reviewControler.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post('/add', auth, ReviewController.addReview);
router.get('/all', ReviewController.getAllReviews);
router.put('/update/:id', auth, ReviewController.updateReview);
router.delete('/delete/:id', auth, ReviewController.deleteReview);

export default router;
