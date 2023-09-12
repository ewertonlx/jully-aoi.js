module.exports = {
  name: 'snake',
  aliases: ['cobra'], //Coloque sinônimos
  code: `
$djsEval[(async () => {
const { Snake } = require('discord-gamecord')

new Snake({
  message: message,
  slash_command: false,
  embed: {
   title: '<:oiaass:1145746087664160839> | Snake',
   color: '#D2B48C',
   overTitle: '<:raivassd:1145746167137849475> | Fim de jogo!'
},
  snake: { head: '🐸', body: '🟩', tail: '🟩', over: '☠️' },
  emojis: {
   board: '⬛',
   food: '🍒',
   up: '⬆️',
   right: '➡️',
   down: '⬇️',
   left: '⬅️'
},
  foods: ['<a:maxcake:1143175399996653728>', '<a:maxcake:1143175399996653728>', '<a:maxcake:1143175399996653728>', '<a:maxcake:1143175399996653728>'],
  stopButton: 'Encerrar',
  othersMessage: '<:err:1145533683319705692> | Inicie seu próprio jogo! Não tente jogar o dos outros!'
}).startGame();
})()]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
}