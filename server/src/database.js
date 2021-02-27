const { connect } = require("mongoose");

const databaseURI = "mongodb://127.0.0.1:27017/graphql-db";

connect(databaseURI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database is connected successfully"));
