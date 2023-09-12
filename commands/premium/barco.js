module.exports = [{

  name: 'barco',
  code: `
  $setGlobalUserVar[vara;$sub[$getGlobalUserVar[vara;$authorID];$random[1;3]];$authorID]
$setGlobalUserVar[peixe;$sum[$getGlobalUserVar[peixe;$authorID];$random[10;20]];$authorID]
$setGlobalUserVar[cobre;$sum[$getGlobalUserVar[cobre;$authorID];$random[1;7]];$authorID]
$description[<:peixasss:1149119988335128677> | Você pescou \`$random[10;20]\` peixes!
<a:cheastssss:1150771334742294538> | No caminho você encontrou um baú do tesouro que tinha dentro dele \`$random[1;7]\` cobres! <:cobrisse:1150592439724277760>

<:varinhassss:1149120044463300638> | Sua vara de pesca sofreu um desgaste de \`$random[1;3]%\`
<:gasosasss:1150770859699601448> | E o seu barco perdeu \`$random[1;5]%\` do Diesel Marítimo.]
$title[<:pescadorsss:1150766105229525005> | Pesca realizada!]
$image[https://cdn.discordapp.com/attachments/1138956195747594311/1150238865051885598/8b7aaf840b04b88fc06d43f7fa51720d.jpg]
$color[1E90FF]
$deleteMessage[$get[message]]
$reply
$wait[5s]
$let[message;$channelSendMessage[$channelID;<:pescadorsss:1150766105229525005> | <@$authorID> jogou a isca no mar. 1h depois...;true]]
$globalCoolDown[1h;<:timerss:1145535331484061776> | <@$authorID> espere \`%time%\` até o seu barco reabastecer no porto!]
$onlyIf[$getGlobalUserVar[vara;$authorID]>=10;<:varinhassss:1149120044463300638> | <@$authorID>, sua rede de pesca está quebrando, vá à loja e repare-a.]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=false;<:vipsss:1145775827359907870> | <@$authorID>, você encontrou uma função premium! Para desbloquear, escolha um plano disponível em meu servidor! <#1147172587038851134>.]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]





// https://cdn.discordapp.com/attachments/1138956195747594311/1150238865051885598/8b7aaf840b04b88fc06d43f7fa51720d.jpg