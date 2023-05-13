const Router = require("express");
const bookController = require("../controllers/bookController");

const router = new Router();

router.post("/", bookController.create)
router.get("/", bookController.get)
router.get("/search", bookController.search)
router.get("/byGenre/:id", bookController.getByGenre)
router.get("/:id", bookController.getOne)



module.exports = router;