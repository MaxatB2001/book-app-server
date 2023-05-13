const Router = require("express");
const userController = require("../controllers/userController")

const router = new Router()

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/feedback", userController.addFedback)
router.get("/feedback", userController.getFeedback)
    
module.exports = router