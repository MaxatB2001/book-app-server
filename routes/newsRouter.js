const Router = require("express");
const newsController = require("../controllers/newsController")

const router = new Router();

router.post("/", newsController.create)
router.get("/", newsController.getNews)
router.post("/comment", newsController.createNewsComment)
router.get("/comment", newsController.getComments)
router.get("/allNews", newsController.getAllNews)

module.exports = router;