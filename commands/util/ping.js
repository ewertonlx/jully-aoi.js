module.exports = [{
name: "ping",
type: "interaction",
prototype: "slash",
code: `
$interactionReply[<:pingsss:1145539036270837841> | <@$authorID>, meu ping está em \`$ping\`ms;;;;everyone;false]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
},{

name: 'ping',
  code: `
  
  <:pingsss:1145539036270837841> | <@$authorID>, meu ping está em \`$ping\`ms
  $reply
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`

}]
