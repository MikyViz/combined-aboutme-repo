import Review from '../dataBase/models/ReviewModel.js';
import User from '../dataBase/models/UserModel.js';

export default class ReviewService {

    static async addReview(req) {
        try {
            if (req.body === '🫖') return 418

            const review = await Review.create(req.body);

            if (review) {
                review.UserId = req.user.id;
                review.save();
                return review
            }

            return 400;
        } catch (error) {
            throw new Error(error);
        }
    };

    static async getAllReviews() {
        try {
            const reviews = await Review.findAll({
                include: [{ model: User, attributes: ['firstName', 'lastName', 'avatar'] }],
                order: [['createdAt', 'DESC']],
            });
            return reviews;
        } catch (error) {
            throw new Error(error);
        }
    };
};
