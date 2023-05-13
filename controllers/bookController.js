const uuid = require("uuid")
const path = require("path")
const ApiError = require("../errors/ApiError");
const Author = require("../models/authorModel");
const Book = require("../models/bookModel")

class BookController {
  async create(req, res, next) {
    try {
      let {name, pages, author, genre} = req.body;
      const {picture, bookFile} = req.files;
      const fileName = uuid.v4() + ".jpg";
      const bookFileName = uuid.v4() + ".pdf";
      picture.mv(path.resolve(__dirname, '..', 'static', fileName));
      bookFile.mv(path.resolve(__dirname, "..", "static", bookFileName));
      const book = await Book.create({name, picture: fileName, bookFile: bookFileName, pages, author, genre})
      return res.json(book);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async get(req, res) {
    const books = await Book.find()
    return res.json(books);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const book = await Book.findById(id)
    return res.json(book);
  }

  async search(req, res) {
    const {query} = req.query
    let books = []
    if (query) books = await Book.find({name: {$regex: new RegExp(query, 'i')}})
    return res.json(books);
  }

  async getByGenre(req, res) {
    const {id} = req.params;
    const books = await Book.find({genre: id});
    return res.json(books);
  }
}

module.exports = new BookController();