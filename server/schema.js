const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type Image {
    altText: String,
    url: String
  }

  type Products {
    id: ID,
    title: String,
    description: String,
    featuredImage: Image
  }
`);

module.exports = schema;
