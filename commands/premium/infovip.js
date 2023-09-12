module.exports = [{

  name: 'infovip',
  aliases: ['iv'],
  code: `
  $title[Info Vip de $username[$mentioned[1;true]]]
  $description[Tipo: $textTrim[$getGlobalUserVar[prem;$mentioned[1;true]]]
  Dias: \`$replaceText[$replaceText[$getGlobalUserVar[dias;$mentioned[1;true]];true;$getGlobalUserVar[dias;$mentioned[1;true]];1];false;Não tem dias premium;1]\`
  Benefícios: <#1147172587038851134>]
  $color[D2B48C]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=false;<:vipsss:1145775827359907870> | <@$authorID>, você encontrou uma função premium! Para desbloquear, escolha um plano disponível em meu servidor! <#1147172587038851134>.]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]