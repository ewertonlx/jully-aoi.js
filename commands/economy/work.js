module.exports = [{

  name: 'work',
  aliases: ['trabalhar'],
  code: `
  $setGlobalUserVar[cupcakes;$sum[$getGlobalUserVar[cupcakes;$authorID];$random[200;1000]];$authorID]
  <a:maxcake:1143175399996653728> | <@$authorID>, você trabalhou e conseguiu \`$numberSeparator[$random[500;1500];.]\` cupcakes!
  $globalCoolDown[2m;<:timerss:1145535331484061776> | <@$authorID> você tem que esperar \`%time%\` para trabalhar novamente!]
  $reply
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]