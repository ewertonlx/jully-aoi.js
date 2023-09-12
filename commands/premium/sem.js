module.exports = [{

  name: 'semanal',
  aliases: ['sm','psem'],
  code:`
  $setGlobalUserVar[cupcakes;$sum[$getGlobalUserVar[cupcakes;$authorID];$random[9000;10000]];$authorID]
  <a:maxcake:1143175399996653728> | <@$authorID>, você resgatou do seu semanal premium \`$numberSeparator[$random[9000;10000];.] cupcakes!\`
  $globalCoolDown[7d;<:timerss:1145535331484061776> | <@$authorID> você tem que esperar \`%time%\` para resgatar seu semanal premium novamente!]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=false;<:vipsss:1145775827359907870> | <@$authorID>, você encontrou uma função premium! Para desbloquear, escolha um plano disponível em meu servidor! <#1147172587038851134>.]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
  `

}]