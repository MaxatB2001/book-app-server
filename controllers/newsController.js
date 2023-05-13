const ApiError = require("../errors/ApiError");
const News = require("../models/newsModel");
const uuid = require("uuid")
const path = require("path");
const NewsComment = require("../models/NewsCommentModel");

class NewsController {
  async create(req, res, next) {
    console.log(req);
    try {
      const {title, text} = req.body;
      const {picture} = req.files
      const fileName = uuid.v4() + ".jpg";
      picture.mv(path.resolve(__dirname, '..', 'static', fileName));
      const news = await News.create({title, text, picture: fileName})
      return res.json(news)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async getNews(req, res, next) {
    const limit = 5
    const {currentPage} = req.query;
    try {
      const news = await News.find({}, null, {sort: {createdAt: -1}}).limit(limit).skip((currentPage - 1) * limit)
      res.json(news)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async createNewsComment(req, res, next) {
    const {text, user, newsId} = req.body;
    try {
      const comment = await NewsComment.create({text, user, news: newsId})
      const findComment = await NewsComment.findById(comment._id).populate("user")
      const news = await News.findById(newsId)
      news.newsComments.push(comment)
      news.save()
      res.json(findComment)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getComments(req, res, next) {
    const {newsId} = req.query
    try {
      const comments = await NewsComment.find({news: newsId}).populate("news").populate("user")
      res.json(comments)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async getAllNews(req, res, next) {
    const news = await News.find().populate({path: "newsComments", populate: {path: "user"}})
    res.json(news)
  }
}

module.exports = new NewsController()