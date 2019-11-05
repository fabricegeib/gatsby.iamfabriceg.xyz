/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const fortniteSaveTheWorldHeroesData = [
      {
        name: "Ramirez, maître grenadier",
        type: "Hero",
        class: "Soldat",
        rarity: "Mythic",
        perk: "Bigger is better",
        skillsOne: "",
      },
      {
        name: "Kyle, constructeur méga",
        type: "Hero",
        class: "Constructeur",
        rarity: "Mythic",
        perk: "",
        skillsOne: "",
      },
    ]
    fortniteSaveTheWorldHeroesData.forEach(heroes => {
      createPage({
        path: `/fortnite/save-the-world/hereos/${heroes.name}`,
        component: require.resolve(`./src/templates/fortniteSaveTheWorldHeroesData-template.js`),
        context: { heroes },
      })
    })
  }