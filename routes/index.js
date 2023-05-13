const Router = require("express");
const bookRouter = require("./bookRouter");
const authorRouter = require("./authorRouter");
const genreRouter = require("./genreRouter");
const newsRouter = require('./newsRouter')
const userRouter = require("./userRouter")
const router = new Router();

router.use('/book', bookRouter)
router.use('/author', authorRouter)
router.use('/genre', genreRouter)
router.use('/news', newsRouter)
router.use('/user', userRouter)

module.exports = router;