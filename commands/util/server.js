module.exports = [{

  name: 'serverinfo',
  aliases: ['si','infoserver'],
  code: `
$title[<:infoss:1145544492636717156> | Info do server $guildName[$guildID]]
$description[
<:anotasss:1145725689371299850> | **GERAIS**
  
<:discss:1145544843444097076> | Nome do server: *$guildName[$guildID]*
<:ids:1128682851907416124> | Servidor ID: \`$guildID\`
<:owersss:1145544905956003850> | Dono: <@$ownerID[$guildID]>
<:calendarss:1145544681145512070> | Criado em: \`$creationDate[$guildID]\`
  
<:istrela:1145726783640064081> | **ESTATÍSTICAS**

<:channelss:1145544976713916530> | Canais: \`$channelCount\`
<:tagdc:1145544582583549993> | Cargos: \`$roleCount\`
<:membersss:1145544779183177831> | Membros: \`$membersCount\`
$color[D2B48C]
$thumbnail[$guildIcon]
$image[https://cdn.discordapp.com/attachments/1134505790263275570/1148233644943605800/20230904_093013.jpg]
$reply
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`

}]