module.exports = [{

  name: 'pescar',
  aliases: ['pesc','pesca'],
  code: `
  $setGlobalUserVar[vara;$sub[$getGlobalUserVar[vara;$authorID];$random[1;3]];$authorID]
$setGlobalUserVar[peixe;$sum[$getGlobalUserVar[peixe;$authorID];$random[1;5]];$authorID]

$description[<:peixasss:1149119988335128677> | Você pescou \`$random[1;5]\` peixes! 
<:varinhassss:1149120044463300638> | Sua vara de pesca sofreu um desgaste de \`$random[1;3]%\`]
$title[<:pescadorsss:1150766105229525005> | Pesca realizada!]
$image[https://cdn.discordapp.com/attachments/1139345429180453034/1149129553848045679/2141183a148ee7ce57b56bac730d12aa.jpg]
$color[1E90FF]
$deleteMessage[$get[message]]
$reply
$wait[5s]
$let[message;$channelSendMessage[$channelID;<:pescadorsss:1150766105229525005> | <@$authorID> jogou a isca no lago. 5 minutos depois...;true]]
$globalCoolDown[5m;<:timerss:1145535331484061776> | <@$authorID> você deve estar muito cansado da pescaria, descanse \`%time%\`.]
$onlyIf[$getGlobalUserVar[vara;$authorID]>=10;<:varinhassss:1149120044463300638> | <@$authorID>, sua vara de pesca está quebrando, vá à loja e repare-a.]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]