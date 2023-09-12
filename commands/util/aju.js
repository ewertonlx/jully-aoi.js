module.exports = [{

name: "help",
type: "interaction",
prototype: "slash",
code: `
$interactionReply[;{newEmbed:{title:$customEmoji[istrela;1126987747815608381]| Jully - Central}{description:$customEmoji[onai;1126987747815608381] | Aperte um botão para ir na categoria desejada!
$customEmoji[alertasss;1126987747815608381]| \`[]\` - **Obrigatório**
$customEmoji[alertasss;1126987747815608381] | \`()\` - **Opcional**}{image:https#COLON#//cdn.discordapp.com/attachments/1134505790263275570/1146463963064840233/20230830_100223.jpg}{footer:Meu prefixo neste servidor é ($getGuildVar[prefix])}{color:D2B48C}};{actionRow:{button:Administração:2:adma_$authorID:false:$customEmoji[commandsss;1126987747815608381]}{button:Economia:2:ecoa_$authorID:false:$customEmoji[maxcake;1126987747815608381]}{button:Utilidades:2:utia_$authorID:false:$customEmoji[membersss;1126987747815608381]}{button:Premium:2:premi_$authorID:false:$customEmoji[vipsss;1126987747815608381]}}]
`
},{
  name: "ajuda",
aliases: ["help","a"],
code: `
$title[<:istrela:1145726783640064081> | Jully - Central]
$description[<:onai:1145545026470957096> | Aperte um botão para ir na categoria desejada!
<:alertasss:1145775956443811930> | \`[]\` - **Obrigatório**
<:alertasss:1145775956443811930> | \`()\` - **Opcional**]
$addButton[1;Premium;secondary;premi_$authorID;false;<:vipsss:1145775827359907870>]
$addButton[1;Utilidade;secondary;utia_$authorID;false;<:membersss:1145544779183177831>]
$addButton[1;Economia;secondary;ecoa_$authorID;false;<a:maxcake:1143175399996653728>]
$addButton[1;Administração;secondary;adma_$authorID;false;<:commandsss:1145545130598740058>]
$footer[Meu prefixo neste servidor é: $getGuildVar[prefix]]
$image[https://cdn.discordapp.com/attachments/1134505790263275570/1146263044016586772/20230829_225811.jpg]
$color[D2B48C]
$reply`
},{

type: "interaction", // adm
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{title:$customEmoji[commandsss;1126987747815608381] | Categoria Administrativa}{description:
$customEmoji[linguass;1126987747815608381] | Comandos#COLON#
- \`j.clear\` [quantia]#COLON# *Limpa mensagens do chat*
- \`j.kick\` [@user] (motivo)#COLON# *Expulsa alguém do servidor*
- \`j.ban\` [@user] (motivo)#COLON# *Bane alguém do seu servidor*
- \`j.setprefix\` [prefix]#COLON# *Seta um prefix para a Jully*
- \`j.unban\` [ID] (motivo)#COLON# *Desbane alguém banido do seu servidor*
- \`j.mute\` [@user] [tempo] (motivo)#COLON# *Muta/castiga alguém*
- \`j.unmute\` [@user] (motivo)#COLON# *Retira o mute/castigo de alguém*}{color:D2B48C}{image:https#COLON#//cdn.discordapp.com/attachments/1134505790263275570/1146973329203400825/20230831_220039.jpg}}
;{actionRow:{button:Administraçao:3:adma_$authorID:true:$customEmoji[commandsss;1126987747815608381]}{button:Economia:2:ecoa_$authorID:false:$customEmoji[maxcake;1126987747815608381]}{button:Utilidades:2:utia_$authorID:false:$customEmoji[membersss;1126987747815608381]}{button:Premium:2:premi_$authorID:false:$customEmoji[vipsss;1126987747815608381]}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==adma;]`
},{

  type: "interaction", // economia
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:$customEmoji[maxcake;1126987747815608381] | Categoria Econômica}{description:
$customEmoji[linguass;1126987747815608381] | Comandos#COLON#
- \`j.daily\`#COLON# *Resgata o daily*
- \`j.work\`#COLON# *Ganha cupcakes extras*
- \`j.bal\` (@user)#COLON# *Olhe o seu saldo ou o de alguém*
- \`j.rank\`#COLON# *Ranking das cupcakes*
- \`j.pay\` [@user] [quantia]#COLON# *Paga um valor pra algum usuário*
- \`j.pescar\`#COLON# *Pesca alguns peixinhos*
- \`j.inventario\` (@user)#COLON# *Informações sobre seus itens*}{color:D2B48C}{image:https#COLON#//cdn.discordapp.com/attachments/1134505790263275570/1146973329484423218/20230831_215820.jpg}}
;{actionRow:{button:Administraçao:2:adma_$authorID:false:$customEmoji[commandsss;1126987747815608381]}{button:Economia:3:ecoa_$authorID:true:$customEmoji[maxcake;1126987747815608381]}{button:Utilidades:2:utia_$authorID:false:$customEmoji[membersss;1126987747815608381]}{button:Premium:2:premi_$authorID:false:$customEmoji[vipsss;1126987747815608381]}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ecoa;]`
},{
  type: "interaction", // utilidades
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:$customEmoji[membersss;1126987747815608381] | Categoria Utilitária}{description:
$customEmoji[linguass;1126987747815608381] | Comandos#COLON#
- \`j.botinfo\`#COLON#  *Informações da Jully*
- \`j.ping\`#COLON# *Como o nome já diz, vê o ping*
- \`j.serverinfo\`#COLON# *Informações do servidor*
- \`j.snake\`#COLON# *Jogo da cobrinha*
- \`j.userinfo\` (@user)#COLON# *Comando para ver informações de um usuário*
- \`j.cd\` (@user)#COLON# *Olha os seus cooldowns*
- \`j.userinfo\`(@user)#COLON# *Suas informações*
- \`j.perfil\` (@user)#COLON# *Seu perfil*
- \`j.sobremim\` [novo sobremim]#COLON# *Troque seu sobremim*}{color:D2B48C}{image:https#COLON#//cdn.discordapp.com/attachments/1134505790263275570/1147285783821168640/20230901_184347.jpg}}
;{actionRow:{button:Administraçao:2:adma_$authorID:false:$customEmoji[commandsss;1126987747815608381]}{button:Economia:2:ecoa_$authorID:false:$customEmoji[maxcake;1126987747815608381]}{button:Utilidades:3:utia_$authorID:true:$customEmoji[membersss;1126987747815608381]}{button:Premium:2:premi_$authorID:false:$customEmoji[vipsss;1126987747815608381]}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==utia;]`
},{

  type: "interaction", // premium
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:$customEmoji[vipsss;1126987747815608381] | Categoria Premium}{description:
$customEmoji[linguass;1126987747815608381] | Comandos#COLON#
- \`j.pdaily\`#COLON# *Resgata mais cupcakes do que o daily normal*
- \`j.semanal\`#COLON# *Ganha cupcakes extras*
- \`j.infovip\` (@user)#COLON# *Informações sobre o premium*
- \`j.barco\`#COLON# *Pesca + peixinhos e encontra um baú do tesouro!*}{color:D2B48C}{image:https#COLON#//cdn.discordapp.com/attachments/1144833732574969878/1148778145785323580/20230905_213336.jpg}}
;{actionRow:{button:Administraçao:2:adma_$authorID:false:$customEmoji[commandsss;1126987747815608381]}{button:Economia:2:ecoa_$authorID:false:$customEmoji[maxcake;1126987747815608381]}{button:Utilidades:2:utia_$authorID:false:$customEmoji[membersss;1126987747815608381]}{button:Premium:3:premi_$authorID:true:$customEmoji[vipsss;1126987747815608381]}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==premi;]`
}]