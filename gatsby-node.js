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
        "platforms" : [ "Mac", "Mobile", "Playstation", "PC", "Switch", "Xbox" ],
      },
      {
        slug: "red-dead-redemption-2",
        name: "Red Dead Redemption 2",
        type: "xxx",
        dateRelease: "2018",
        "platforms" : [ "Playstation", "PC", "Xbox" ],
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
