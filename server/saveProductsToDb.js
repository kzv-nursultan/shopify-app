const mongoose = require("mongoose");
const fetch = require("node-fetch");
const Product = require("./models/Product");
const connectMongoDb = require("./connectToDb");
const CONFIG = require("./config");

const query = `
  {
    products (first: 2) {
      edges {
        node {
          id,
          title,
          description,
          featuredImage {
            altText,
            url
          }
        }
      }
    }
  }
`;

const saveToDB = async () => {
  await connectMongoDb();
  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }
  try {
    const response = await fetch(CONFIG.GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": CONFIG.SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    await Product.insertMany(data.products.edges);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    await mongoose.connection.close();
  }
};

saveToDB().catch((e) => console.error(e));
