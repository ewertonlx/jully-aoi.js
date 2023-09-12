module.exports = [{

  name: 'bal',
  aliases: ['atm','carteira'],
  code: `
<a:maxcake:1143175399996653728> | <@$authorID>, $replaceText[$replaceText[$mentioned[1;true];$authorID;você];$mentioned[1];este usuário] possui **$numberSeparator[$getGlobalUserVar[cupcakes;$mentioned[1;true]];.]** (\`$abbreviate[$getGlobalUserVar[cupcakes;$mentioned[1;true]];0]\`) cupcakes.
$reply
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]
