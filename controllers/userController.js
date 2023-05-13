const ApiError = require("../errors/ApiError")
const Feedback = require("../models/feedbackModel")
const User = require("../models/userModel")

class UserController {
    async register(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.create({email, password})
            return res.json(user)
        } catch (error) { 
            next(ApiError.badRequest(error.message))
        }
    }

    async login(req, res, next) {
            const {email, password} = req.body
            console.log(email, password);
            const user = await User.findOne({email, password})
            console.log(user);
            if (user) {
                return res.json(user);
            } else {
                next(ApiError.badRequest("bad"))
            }
       
    }

    async addFedback(req, res, next) {
        const {user, text} = req.body
        const feedback = await Feedback.create({user, text})
        return res.json(feedback)
    }

    async getFeedback(req, res, next) {
        const feedbacks = await Feedback.find().populate("user")
        return res.json(feedbacks)
    }
}


module.exports = new UserController()