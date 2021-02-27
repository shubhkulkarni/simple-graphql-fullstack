const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("./database");
const cors = require("cors");
const schema = require("./schema/schema");

const app = express();

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(8000, () => console.log("server is running on 8000"));
