const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB config
// const db = require("./config/keys").mongoURI;
const db =
  process.env.MONGO_URI ||
  "mongodb://mike123:mike123@mw-cluster-shard-00-00-szjc4.mongodb.net:27017,mw-cluster-shard-00-01-szjc4.mongodb.net:27017,mw-cluster-shard-00-02-szjc4.mongodb.net:27017/test?ssl=true&replicaSet=MW-Cluster-shard-0&authSource=admin&retryWrites=true";

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
