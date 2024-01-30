const fetch = require("node-fetch");
const SHOPIFY_STORE_URL = "cpb-new-developer.myshopify.com/";
const graphqlEndpoint = `https://${SHOPIFY_STORE_URL}/admin/api/2024-01/graphql.json`;
const SHOPIFY_ACCESS_TOKEN = "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";

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

const query = `
  {
    products (first: 1) {
      edges {
        node {
          id,
          title,
          isGiftCard,
          featuredImage {
            altText,
            url
          }
        }
      }
    }
  }
`;

const run = () => {
  fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the GraphQL response here
      console.log(JSON.stringify(data, null, 2));
    })
    .catch((error) => console.error("Error fetching products:", error));
};

module.exports = run;

