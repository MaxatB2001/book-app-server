const express = require("express");
const cors = require("cors");
const {connectDB} = require("./config/db.config")
const router = require("./routes/index")
const path = require("path")
const errorHandler = require("./middlewares/ErrorHandlingMiddleware")
const fileUpload = require("express-fileupload")

const PORT = process.env.PORT || 5000

connectDB();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on ${PORT}`));
