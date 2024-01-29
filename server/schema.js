const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Products {
  id: ID,
  name: String
}
`);

module.exports = schema;
