/**
    * Implement Gatsby's Node APIs in this file.
    *
    * See: https://www.gatsbyjs.org/docs/node-apis/
    */

// You can delete this file if you're not using it

const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // console.log(node.internal.type)

    // console.log(JSON.stringify(node, undefined, 4))

    if (node.internal.type === 'HeroesJson') {
            const cardLC = ((node.name).toLowerCase())
            // delete blank space
            const card = cardLC.replace(/\s+/g, '-').replace(/\./g,'').replace(/,/g, "").replace(/"/g, "")
            // delete dot

            createNodeField({
                node,
                name: 'cardSlug',
                value: card
            })

        // console.log(JSON.stringify(node, undefined, 4))
    }

  
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const cardTemplate = path.resolve('./src/templates/card-template.js')

    const res = await graphql(`
        query MyQuery {
            allHeroesJson {
                edges {
                    node {
                        class
                        fields {
                            cardSlug
                        }
                    }
                }
            }
        }
    `)

    res.data.allHeroesJson.edges.forEach((edge) => {
        createPage ({
            component: cardTemplate,
            path: `/fortnite/save-the-world/heroes/${edge.node.class}/${edge.node.fields.cardSlug}`,
            context: {
                cardSlug: edge.node.fields.cardSlug
            }
        })
    })
}

// axios - madamnazar.io
// https://madam-nazar-location-api-2.herokuapp.com/
// https://madam-nazar-location-api-2.herokuapp.com/location/current




// exports.createPages = async ({ actions: {createPage}, graphql }) => {
//   const results = await graphql(`
//     {
//       allHeroesJson {
//         edges {
//           node {
//             slug
//             class
//           }
//         }
//       }
//     }
//   `)
//   results.data.allHeroesJson.edges.forEach(edge => {
//     const heroes = edge.node;

//     createPage({
//       path: `/fortnite/save-the-world/heroes/${heroes.class}/${heroes.slug}/`,
//       component: require.resolve("./src/templates/heroes-graphql.js"),
//       context: {
//         slug: heroes.slug,
//       },
//     })
//   })
// }

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

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type heroesJson implements Node @dontInfer {
//       image: String!
//     }
//   `
//   createTypes(typeDefs)
// }

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