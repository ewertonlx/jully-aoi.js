module.exports = [{

  name: 'setvip',
  aliases: ['svip'],
  code: `
  $channelSendMessage[1148238247273697290;{newEmbed:{title:<:vipsss:1145775827359907870> | Premium adicionado}{description: <:nerdssss:1145745799523864576> | Usuário: $username[$mentioned[1;true]]
<:infoss:1145544492636717156> | ID: $mentioned[1;true]
<:vipsss:1145775827359907870> | Tipo: $message[3]
<:calendarss:1145544681145512070> | Dias: $message[2]
<:timerss:1145535331484061776> | Hoje: <t:$round[$math[$datestamp/1000]]:R> 
<:timerss:1145535331484061776> | $parseDate[$dateStamp;date]}{color:D2B48C}};false]
$setGlobalUserVar[dias;$message[2];$mentioned[1;true]]
$setGlobalUserVar[premium;true;$mentioned[1;true]]
$channelSendMessage[$channelID;<:vipsss:1145775827359907870> | premium setado para <@$mentioned[1;true]> por \`$message[2]\` dias do tipo \`$message[3]\`]
$onlyForIDs[551374220953649181;apenas meu dono bl?]`
}]