- Quests
- Map
- Command
    - Heroes
        - Manage
        - Hero loadout
        - Defenders
        - Expeditions
    - Survivors
        - Manage
        - Squads
    - Upgrades
        - Gadgets
        - Tools
    - Research
        - Fortitude
        - Offense
        - Resistance
        - Tech
    - Profile
        - XP Boosts
        - Account Boosts
- Armory
    - Schematics
        - All
        - New
        - Level Up
        - Ranged weapons
        - Melee weapons
        - Traps
    - Backpack
        - Ranged weapons
        - Melee weapons
        - Ammo
        - Traps
        - Ingredients
    - Storage
        - All
        - Ranged weapons
        - Melee weapons
        - Ammo
        - Traps
        - Ingredients
    - Collection book
    - Resources
- Locker
- Llama shop
- Store

---

heroes (missing) :
- constructor (verify on soldier)
    
---

color bg : 091837 / 0d2143 / 0a2c5f

---

## exemple of hero on heroes.json

    {
        "name":"Controller Harper Uncommon",
        "nameFr":"Harper, contrôleuse",
        "slug":"controller-harper-unncommon",
        "rarity":"uncommon",
        "class":"constructor",
        "type":"heroes",
        "collectionBook":{
            "group":"heroes",
            "subgroup":"constructor",
            "bloc":"Controller Harper",
            "own":"1",
            "collect":"1"
        },
        "image":"./images/heroes/constructor/T-Constructor-HID-Constructor-007-UC-T01-L.png",
        "classPerks":[
            {
                "title":"Kinetic Overload",
                "text":"Melee knockbacks and staggers trigger Kinetic Overload, dealing 25 base Energy Damage to nearby enemies. After melee critical hits, increases Melee Impact Damage by 10% for 5 seconds up to 5 stacks.",
                "titleFr":"Surcharge cinétique",
                "textFr":"Les attaques de mêlée qui repoussent ou font chanceler les ennemies déclenchent une Surcharge cinétique, infligeant 25 pts de dégâts dénergie de base aux ennemis proches. Après les coups critiques en mêlée, augmente les dégâts d'impact de mêlée de 10% pendant 5 s (peut se cumuler jusqu'à 5 fois)."
            },
            {
                "title":"B.A.S.E",
                "text":"Place B.A.S.E. to reinforce attached structures with 60 Armor. Extends 4 segments from placement. Placed from trap wheel.",
                "titleFr":"B.A.S.E",
                "textFr":"Place une B.A.S.E. qui renforce les structures liées proches en leur conférant 60 pts d'armure. S'étend sur 4 segments depuis le lieu de placement. Se place depuis la roue des pièges."
            }
        ],
        "perk":{
            "standard":"Grease The Wheels",
            "standardText":"Decreases D.E.C.O.Y. Cooldown by 17%",
            "standardFr":"Péparer le terrain",
            "standardTextFr":"Réduit le délai de récupération de L.E.U.R.R.E de 17%",
            "commander":"Grease The Wheels +",
            "commanderText":"Decreases D.E.C.O.Y. Cooldown by 43%",
            "commanderFr":"Péparer le terrain +",
            "commanderTextFr":"Réduit le délai de récupération de L.E.U.R.R.E de 43%"
        },
        "abilities":[
            {
                "title":"DECOY",
                "img":"decoy",
                "cost":"30",
                "cooldown":"30",
                "text":"Deploy a D.E.C.O.Y. which distracts nearby enemies for 6 seconds. Does not affect Mist Monsters or Bosses."
            },
            {
                "title":"Plasma Pulse",
                "img":"plasma-pulse",
                "cost":"40",
                "cooldown":"45",
                "text":"Deploy a device which spews plasma mines for 6 seconds. Each mine deals 39,675.2 energy damage."
            },
            {
                "title":"Bull Rush",
                "img":"bull-rush",
                "cost":"20",
                "cooldown":"15",
                "text":"Charge forward 3 titles, dealing 89,700.5 physical damage to enemies and pushing them away with your shield."
            }
        ],
        "citation":"Always in control",
        "citationFr":"Garde en permanance le contrôle.",
        "teamPerkUnlock":"Supercharged Traps",
        "teamPerkUnlockText":"For Each: Constructor Increases Damage of traps affected by B.A.S.E. by 8.5%."
    }

---

## exemples json
    { "series": [
        {
            "titre": "Game Of Thrones", 
            "realisateur": "Alan Taylor"
        },
        {
            "tire": "Peaky Blinders",
            "realisateur": "Otto Bathurst"
        }
    ]} 

    ---

    {
        "url": "https://anapioficeandfire.com/api/characters/583",
        "name": "Jon Snow",
        "gender": "Male",
        "culture": "Northmen",
        "born": "In 283 AC",
        "died": "",
        "titles": [
            "Lord Commander of the Night's Watch"
        ],
        "aliases": [
            "Lord Snow",
            "Ned Stark's Bastard",
            "The Snow of Winterfell",
            "The Crow-Come-Over",
            "The 998th Lord Commander of the Night's Watch",
            "The Bastard of Winterfell",
            "The Black Bastard of the Wall",
            "Lord Crow"
        ],
        "father": "",
        "mother": "",
        "spouse": "",
        "allegiances": [
            "https://anapioficeandfire.com/api/houses/362"
        ],
        "books": [
            "https://anapioficeandfire.com/api/books/5"
        ],
        "povBooks": [
            "https://anapioficeandfire.com/api/books/1",
            "https://anapioficeandfire.com/api/books/2",
            "https://anapioficeandfire.com/api/books/3",
            "https://anapioficeandfire.com/api/books/8"
        ],
        "tvSeries": [
            "Season 1",
            "Season 2",
            "Season 3",
            "Season 4",
            "Season 5",
            "Season 6"
        ],
        "playedBy": [
            "Kit Harington"
        ]
    }