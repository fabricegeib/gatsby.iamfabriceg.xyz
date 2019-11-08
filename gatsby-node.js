/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: {createPage}, graphql }) => {
  const results = await graphql(`
    {
      allHeroesJson {
        edges {
          node {
            slug
            class
          }
        }
      }
    }
  `)
  results.data.allHeroesJson.edges.forEach(edge => {
    const heroes = edge.node;

    createPage({
      path: `/fortnite/save-the-world/heroes/${heroes.class}/${heroes.slug}/`,
      component: require.resolve("./src/templates/heroes-graphql.js"),
      context: {
        slug: heroes.slug,
      },
    })
  })
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type AuthorJson implements Node {
//       joinedAt: Date
//       image: String!
//     }
//   `
//   createTypes(typeDefs)
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type heroesJson implements Node @dontInfer {
      image: String!
    }
  `
  createTypes(typeDefs)
}

// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     # One must say that the type is a Node
//     type AuthorJson implements Node {
//       # However Node fields are optional and you don't have to add them
//       name: String
//       birthday: Date
//     }
//   `
//   createTypes(typeDefs)
// }