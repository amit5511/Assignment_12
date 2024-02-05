const express = require("express");
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const productRoute = require("./router/product-router.js"); // Import the product router
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const path = require('path')
const app = express();

const corsOptions = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute); // Mount the product router
app.use(express.static(path.join(__dirname,'../client/dist')));
app.use("*",(req,res)=>{
    console.log("==============================44444==========")
    res.type('text/html');
    res.sendFile(path.resolve(__dirname,'../client/dist/index.html'))
})
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb()
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});