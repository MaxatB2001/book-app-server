const Router = require("express");
const bookRouter = require("./bookRouter");
const authorRouter = require("./authorRouter");
const genreRouter = require("./genreRouter");
const router = new Router();

router.use('/book', bookRouter)
router.use('/author', authorRouter)
router.use('/genre', genreRouter)

module.exports = router;