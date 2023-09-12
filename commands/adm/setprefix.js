module.exports = [{
  name: "setprefix",
  aliases: ["setarprefixo","sp"],
  code: `
  $reply
<:commandsss:1145545130598740058> | <@$authorID>, prefixo setado como \`$message\` com sucesso!
  $setGuildVar[prefix;$message;$guildID]
  $onlyIf[$message!=$getGuildVar[prefix];<:err:1145533683319705692> | Você não pode setar o prefixo atual!]
  $argsCheck[1;<:err:1145533683319705692> | escreva o prefixo desejado!]
  $onlyPerms[administrator;<@$authorID>, você precisa da permissão \`Administrador\`, peça para algum superior usar este comando por você.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
  `
}]