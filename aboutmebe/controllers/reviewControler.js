import ReviewService from '../services/reviewService.js';

export default class ReviewController {

    static async addReview(req, res) {
        try {
            const review = await ReviewService.addReview(req);
            if (typeof review === 'number') {
                switch (review) {
                    case 418:
                        return res.status(418).json({ msg: 'All you need is coffe☕🤠' });
                        // break;
                    case 400:
                        return res.status(400).json({ msg: "I tried to add your review, bro... but something went wrong💩" });
                        // break;
                    default:
                        break;
                };
            };
            res.status(201).json(review);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        };
    };

    static async getAllReviews(req, res) {
        try {
            const reviews = await ReviewService.getAllReviews();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        };
    };

    static async updateReview(req, res) {
        try {
            const review = await ReviewService.updateReview(req);
            if (!review) return res.status(403).json({ msg: 'Not allowed' });
            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        };
    };
};