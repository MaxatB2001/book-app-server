const ApiError = require("../errors/ApiError");
const Author = require("../models/authorModel")

class AuthorController {
  async create(req, res, next) {
    try {
      let {name, picture } = req.body;
      const author = await Author.create({name, picture})
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async get(req, res) {
    const authors = await Author.find().populate('books');
    return res.json(authors);
  }
}

module.exports = new AuthorController();