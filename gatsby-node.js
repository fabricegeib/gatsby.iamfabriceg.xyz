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
        name: "Fortnite",
        type: "xxx",
        dateRelease: "2017",
        "platforms" : [ "Mac", "Mobile", "Playstation", "PC", "Switch", "Xbox" ],
      },
      {
        name: "Red Dead Redemption 2",
        type: "xxx",
        dateRelease: "2018",
        "platforms" : [ "Mac", "Mobile", "Playstation", "PC", "Xbox" ],
      },
    ]
    gamesData.forEach(games => {
      createPage({
        path: `/games/${games.name}`,
        component: require.resolve(`./src/templates/gamesData-template.js`),
        context: { games },
      })
    })

    const fortniteSaveTheWorldHeroesData = [
      {
        name: "Master grenadier Ramirez",
        nameFR: "Ramirez, maître grenadier",
        type: "Hero",
        class: "Soldat",
        rarity: "Mythic",
        perk: "Bigger is better",
        "skills" : [ "Frag grenade", "Goin' commando!!!", "Shockwave" ]
      },
      {
        name: "Rescue trooper Ramirez",
        nameFr: "Ramirez, Soldat d'assistance",
        type: "Hero",
        class: "Soldat",
        rarity: "Mythic",
        "rarity" : [ "Uncommon", "Rare", "Epic", "Legendary" ],
        perk: "Bigger is better",
        "skills" : [ "Frag grenade", "Goin' commando!!!", "Shockwave" ]
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