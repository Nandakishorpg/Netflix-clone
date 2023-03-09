const express = require("express");
const app = express();

const registerRouter=require("./routes/registerRouter")


app.use(express.json())


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
  app.use(express.urlencoded({ extended: true }))

  
  app.use('/register',registerRouter)


app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
