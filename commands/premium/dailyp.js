module.exports = [{

  name: 'pdaily',
  aliases: ['pd','pdiario'],
  code:`
  $setGlobalUserVar[cupcakes;$sum[$getGlobalUserVar[cupcakes;$authorID];$random[3000;6000]];$authorID]
  <a:maxcake:1143175399996653728> | <@$authorID>, você resgatou do seu daily premium \`$numberSeparator[$random[3000;6000];.] cupcakes!\`
  $globalCoolDown[1d;<:timerss:1145535331484061776> | <@$authorID> você tem que esperar \`%time%\` para resgatar seu daily premium novamente!]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=false;<:vipsss:1145775827359907870> | <@$authorID>, você encontrou uma função premium! Para desbloquear, escolha um plano disponível em meu servidor! <#1147172587038851134>.]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
  `

}]