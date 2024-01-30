const Product = require("./models/Product");
const axios = require("axios");
const SHOPIFY_STORE_URL = "cpb-new-developer.myshopify.com/";
const graphqlEndpoint = `https://${SHOPIFY_STORE_URL}/admin/api/2024-01/graphql.json`;
const SHOPIFY_ACCESS_TOKEN = "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";


const query = `
  {
    products (first: 1) {
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

const fetchProducts = async () => {
  try {
    const {
      data: { data },
    } = await axios.request({
      method: "POST",
      url: graphqlEndpoint,
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
      },
      data: {
        query,
      },
    });
    console.log({ data }.data.products.edges);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

module.exports = fetchProducts;

// const run = () => {
//   fetch(graphqlEndpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Handle the GraphQL response here
//       console.log(JSON.stringify(data, null, 2));
//     })
//     .catch((error) => console.error("Error fetching products:", error));
// };

// module.exports = run;

// const query = `
//       {
//         products(first: 5) {
//           edges {
//             node {
//               id
//               title
//               handle
//               description
//               variants(first: 1) {
//                 edges {
//                   node {
//                     id
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `;
