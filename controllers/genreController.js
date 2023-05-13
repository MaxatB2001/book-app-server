const uuid = require("uuid")
const path = require("path")
const ApiError = require("../errors/ApiError");
const Genre = require("../models/genreModel");

class GenreController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const {picture} = req.files;
      const fileName = uuid.v4() + ".jpg";
      picture.mv(path.resolve(__dirname, '..', 'static', fileName));
      const genre = await Genre.create({ name, picture: fileName });
      return res.json(genre);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async get(req, res) {
    const genres = await Genre.find();
    return res.json(genres);
  }
}

module.exports = new GenreController();
