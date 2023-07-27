module.exports = {
  id: 4,
  name: "charmander",
  abilities: [
    { ability: { name: "blaze" } },
    { ability: { name: "solar-power" } }
  ],
  moves: [
    { move: { name: "mega-punch" } },
    { move: { name: "fire-punch" } }
  ],
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png"
  },
  stats: [
    {
      base_stat: 39,
      stat: { name: "hp" }
    },
    {
      base_stat: 52,
      stat: { name: "attack" }
    },
    {
      base_stat: 43,
      stat: { name: "defense" }
    },
    {
      base_stat: 60,
      stat: { name: "special-attack" }
    },
    {
      base_stat: 50,
      stat: { name: "special-defense" }
    },
    {
      base_stat: 65,
      stat: { name: "speed" }
    }
  ],
  types: [
    { type: { name: "fire" } }
  ]
}