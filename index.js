let express = require("express");
// let cors = require("cors");
let app = express();
let port = process.env.PORT || 8080;
let apiRoutes = require("./routes");

let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// const cors = require("cors");

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

//connect to mongoose
const dbPath =
  "mongodb+srv://jprudolph03:031386ma@cluster0.k7suk.mongodb.net/scrapTracking?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);

mongo.then(
  () => {
    console.log("Connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Scrap Tracker"));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
