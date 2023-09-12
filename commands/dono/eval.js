module.exports = [{

  name: 'eval',
aliases: ['e','ev'],
  code: `
  $addField[Entrada: $message]
  $addField[Saída:
  $addField[$eval[$message]]
  ]
  $onlyForIDs[551374220953649181;apenas meu dono bl?]
  
  `


}]