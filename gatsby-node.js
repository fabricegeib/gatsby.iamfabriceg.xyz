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
      path: `/heroes/${heroes.class}/${heroes.slug}/`,
      component: require.resolve("./src/templates/heroes-graphql.js"),
      context: {
        slug: heroes.slug,
      },
    })
  })
}
