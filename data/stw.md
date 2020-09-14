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
        "name":"xxx",
        "nameFr":"xxx",
        "slug":"xxx",
        "rarity":"xx",
        "class":"xxx",
        "type":"xxx",
        "collectionBook":{
            "group":"xxx",
            "subgroup":"xxx",
            "bloc":"xxx",
            "own":"xxx",
            "collect":"xxx"
        },
        "image":"./images/heroes/constructor/T-Constructor-HID-Constructor-007-UC-T01-L.png",
        "teamPerkUnlock":"xxx",
        "teamPerkUnlockText":"xxx",
        "classPerks":[
            {
                "title":"xxx",
                "text":"xxx",
                "titleFr":"xxx",
                "textFr":"xxx"
            },
            {
                "title":"xxx",
                "text":"xxxx",
                "titleFr":"xxx",
                "textFr":"xxx"
            }
        ],
        "perk":{
            "standard":"xxx",
            "standardText":"xxx",
            "standardFr":"xxx",
            "standardTextFr":"xxx",
            "commander":"xxx",
            "commanderText":"xxx",
            "commanderFr":"xxx",
            "commanderTextFr":"xxx"
        },
        "abilities":[
            {
                "title":"xxx",
                "img":"xxx",
                "cost":"xxx",
                "cooldown":"xxx",
                "text":"xxx"
            },
            {
                "title":"xxx",
                "img":"xxx",
                "cost":"xxx",
                "cooldown":"xxx",
                "text":"xxx"
            },
            {
                "title":"xxx",
                "img":"xxx",
                "cost":"xxx",
                "cooldown":"xxx",
                "text":"xxx"
            }
        ],
        "citation":"xxx",
        "citationFr":"xxx"
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