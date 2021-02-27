const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("./database");
const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(8000, () => console.log("server is running on 8000"));
