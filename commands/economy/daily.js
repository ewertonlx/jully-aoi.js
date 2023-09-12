module.exports = [{

  name: 'daily',
  aliases: ['d','diario'],
  code:`
  $setGlobalUserVar[cupcakes;$sum[$getGlobalUserVar[cupcakes;$authorID];$random[1000;3000]];$authorID]
  <a:maxcake:1143175399996653728> | <@$authorID>, você resgatou do seu daily \`$numberSeparator[$random[1000;3000];.] cupcakes!\`
  $globalCoolDown[1d;<:timerss:1145535331484061776> | <@$authorID> você tem que esperar \`%time%\` para resgatar seu daily novamente!]
 $reply
 $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`

}]