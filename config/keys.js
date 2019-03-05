// if (process.env.NODE_ENV === "production") {
//   module.exports = require("./keys_prod");
// } else {
//   module.exports = require("./keys_dev");
// }
module.exports = {
  mongoURI:
    "mongodb://mike123:mike123@mw-cluster-shard-00-00-szjc4.mongodb.net:27017,mw-cluster-shard-00-01-szjc4.mongodb.net:27017,mw-cluster-shard-00-02-szjc4.mongodb.net:27017/test?ssl=true&replicaSet=MW-Cluster-shard-0&authSource=admin&retryWrites=true",
  secretOrKey: "secret"
};
