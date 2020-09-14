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

# exemple

    {
        "name":"Controller Harper Uncommon",
        "nameFr":"Harper, contrôleuse",
        "slug": "controller-harper-unncommon",
        "rarity":"uncommon",
        "class":"constructor",
        "type":"heroes",
        "collectionBook": {
            "group":"heroes",
            "subgroup":"constructor",
            "bloc":"xxx",
            "own":"x",
            "collect":"x" 
        },
        "image":"./images/heroes/constructor/T-Constructor-HID-Constructor-007-UC-T01-L.png",
        "classPerks" : [
            {"title":"Kinetic Overload", "text":"Melee knockbacks and staggers trigger Kinetic Overload, dealing 25 base Energy Damage to nearby enemies. After melee critical hits, increases Melee Impact Damage by 10% for 5 seconds up to 5 stacks."}, 
            {"title":"B.A.S.E", "text":"Place B.A.S.E. to reinforce attached structures with 60 Armor. Extends 4 segments from placement. Placed from trap wheel."}
        ],
        "perk": {
            "standard":"Grease The Wheels",
            "standardText":"Decreases D.E.C.O.Y. Cooldown by 17%",
            "commander":"Grease The Wheels +",
            "commanderText":"Decreases D.E.C.O.Y. Cooldown by 43%"
        },
        "abilities": [
            {"title":"DECOY", "img":"decoy", "cost":"30 energy", "cooldown":"30 seconds", "text":"Deploy a D.E.C.O.Y. which distracts nearby enemies for 6 seconds. Does not affect Mist Monsters or Bosses."},
            {"title":"Plasma Pulse", "img":"plasma-pulse", "cost":"40 energy", "cooldown":"45 seconds", "text":"Deploy a device which spews plasma mines for 6 seconds. Each mine deals 39,675.2 energy damage."},
            {"title":"Bull Rush", "img":"bull-rush", "cost":"20 energy", "cooldown":"15 seconds", "text":"Charge forward 3 titles, dealing 89,700.5 physical damage to enemies and pushing them away with your shield."}
        ],
        "citation":"Always in control",
        "citationFr":"Garde en permanance le contrôle.",
        "teamPerkUnlock":"Supercharged Traps",
        "teamPerkUnlockText":"For Each: Constructor Increases Damage of traps affected by B.A.S.E. by 8.5%."
    },

        "name": "Kyle Constructeur Ultra",
        "nameFr": " ",
        "rarity": "légendaire",
        "class": "constructeur",
        "type": "héros",
        "classPerks" : [
            {"perk": "Surcharge cinétique", "text": "Les attaques de mêlée qui repoussent ou font chanceler les ennemies déclenchent une Surcharge cinétique, infligeant 25 pts de dégâts d'énergie de base aux ennmies proches. Après les coups critiques en mêlée, augmente les dégats d'impact de mêlée de 10% pendant 5 s (peut se cumuler jusqu'à 5 fois)."}, 
            {"perk": "B.A.S.E.", "text": "Place B.A.S.E. to reinforce attached structures with 60 Armor. Extends 4 segments from placement. Placed from trap wheel."}
        ],
        "teamPerkUnlock": " ",
        "teamPerkUnlockText": " ",
        "perk": "Modulation électrique",
        "standardPerk": "Les structures affectées par la B.A.S.E. régénèrent 4% de leurs PV max toutes les 10 s.",
        "commanderPerk": "Les structures affectées par la B.A.S.E. régénèrent 11% de leurs PV max toutes les 10 s.",

---

        "name": "Power B.A.S.E Kyle",
        "nameFr": "Kyle, Constructeur Ultra",
        "rarity": "legendary",
        "class": "constructor",
        "type": "heroes",
        "image": "./images/heroes/constructor/T-Constructor-HID-Constructor-007-Founders-SR-T01-L.png",
        "classPerks" : [
            {"perk": "Kinetic Overload", "text": "Melee knockbacks and staggers trogger Kinetic Overload, dealing 25 base Energy Damage to nerby enemies. After melle critical hist, increases Melee Impact Damage by 10% for 5 seconds, up to 5 stacks."}, 
            {"perk": "B.A.S.E.", "text": "Place B.A.S.E. to reinforce attached structures with 60 Armor. Extends 4 segments from placement. Placed from trap wheel."}
        ],
        "teamPerkUnlock": " ",
        "teamPerkUnlockText": " ",
        "perk": "Power Modulation",
        "standardPerk": "Structures affected by B.A.S.E. are healed for 4% of Max Health every 10 seconds.",
        "commanderPerk": "Structures affected by B.A.S.E. are healed for 11% of Max Health every 10 seconds.",
        "abilities": [
            { "title":"R.O.S.I.E.", "cost":"50 energy", "cooldown": "180 seconds", "text": "Deploy a mountable turret which deals 47,398.434 physical damage per shot and fires 7 shots per second. R.O.S.I.E. has 150 ammo." },
            { "title":"DECOY", "cost":"30 energy", "cooldown": "30 seconds", "text": "Deploy a D.E.C.O.Y. which distracts nearby enemies for 6 seconds. Does not affect Mist Monsters or Bosses." },
            { "title":"Plasma Pulse", "cost":"40 energy", "cooldown": "45 seconds", "text": "Deploy a device which spews plasma mines for 6 seconds. Each mine deals 31,599.0 energy damage." }
        ],
        "citation": "Ok gus, this is my B.A.S.E.! Whaddya think? - Kyle",
        "citationFr": " "

---

{ "series": [
   {   "titre": "Game Of Thrones", 
      "realisateur": "Alan Taylor" },
   {   "tire": "Peaky Blinders", 
      "realisateur": "Otto Bathurst" }
]}



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