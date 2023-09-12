module.exports = [{

  name: 'sobremim',
  aliases: ['sb', 'sobmim'],
code: `
$channelSendMessage[1148652529303953478;{newEmbed:{title:<:offss:1145775790802337792> | Sobremim alterado!}{description: <:nerdssss:1145745799523864576> | Usuário#COLON# \`$username[$mentioned[1;true]]\`
<:infoss:1145544492636717156> | ID#COLON# \`\`\`$mentioned[1;true]\`\`\`
<:discss:1145544843444097076> | Servidor#COLON# $guildName[$guildID]
<a:opaobg:1149860711657381939> | ID do server#COLON# \`\`\`$guildID\`\`\`

<a:mtnerd:1149860665918492753> | Novo sobremim#COLON# \`\`\`$noMentionMessage\`\`\`

<:timerss:1145535331484061776> | Hoje#COLON# <t:$round[$math[$datestamp/1000]]:R> 
<:timerss:1145535331484061776> | $parseDate[$dateStamp;date]}{color:D2B48C}};false]
$setGlobalUserVar[sobremim;$message;$authorID]
$editMessage[$get[message];<:anotasss:1145725689371299850> | <@$authorID>, seu sobremim foi alterado para \`$message\` com sucesso!]
$wait[3s]
$let[message;$channelSendMessage[$channelID;<:anotasss:1145725689371299850> | Alterando o sobremim de <@$authorID>...;true]]
$onlyIf[$checkContains[$message;
]==false;<:err:1145533683319705692> | <@$authorID>, Por favor, não use quebra de linha!]
$onlyIf[$message[1]!=;<:err:1145533683319705692> | <@$authorID>, digite seu novo sobremim]
$onlyIf[$charCount[$message]<=150;<:err:1145533683319705692> | <@$authorID>, você ultrapassou o limite de caracteres permitidos, o limite é \`150\` caracteres!]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
}]