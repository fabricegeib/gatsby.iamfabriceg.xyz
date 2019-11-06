/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  
  const gamesData = [
    {
      slug: "fortnite",
      name: "Fortnite",
      type: "xxx",
      dateRelease: "2017",
      "platforms" : [ "Android", "iOS", "Mac OS", "Microsoft Windows", "Nintendo Switch", "Playstation 4", "Xbox One" ],
    },
    {
      slug: "red-dead-redemption-2",
      name: "Red Dead Redemption 2",
      type: "xxx",
      dateRelease: "2018",
      "platforms" : [ "Microsoft Windows", "Playstation 4", "Xbox One" ],
    },
  ]
  gamesData.forEach(games => {
    createPage({
      path: `/games/${games.slug}`,
      component: require.resolve(`./src/templates/gamesData-template.js`),
      context: { games },
    })
  })

  const fortniteSaveTheWorldHeroesClassData = [
    {
      name: "soldats",
      title: "Soldats",
      date: "06/11/2019",
    },
  ]
  fortniteSaveTheWorldHeroesClassData.forEach(heroesClass => {
    createPage({
      path: `/fortnite/save-the-world/hereos/${heroesClass.name}`,
      component: require.resolve(`./src/templates/fortniteSaveTheWorldHeroesClassData-template.js`),
      context: { heroesClass },
    })
  })
}
