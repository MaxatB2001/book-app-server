const Router = require("express");
const genreController = require("../controllers/genreController");

const router = new Router();

router.post("/", genreController.create)
router.get("/", genreController.get)

module.exports = router;