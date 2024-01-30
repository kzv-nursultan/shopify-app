const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const connectMongoDb = require("./connectToDb");
const fetchProducts = require("./shopifyFetch");

const app = express();
connectMongoDb();
//fetchProducts();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => console.log("server started on port 4000"));
