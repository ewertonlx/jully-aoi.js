module.exports = [{

  name: 'loja',
  aliases: ['lj','mercado'],
  code: `
  $title[<:mercadinss:1150786516822540298> | Lojinha]
  $description[<:price:1133218825639313408> | O quê você gostaria de ver?]
  $addButton[1;Pets;secondary;pets_$authorID;false;<:catssd:1145725759936278618>]
  $addButton[1;Itens;secondary;itens_$authorID;false;<:varinhassss:1149120044463300638>]
  $color[20B2AA]
  $globalCoolDown[5s;espere %time% para executar outro comando!]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
},{
  type: "interaction", // itens
prototype: "button",
code:`
$interactionUpdate[;{newEmbed:{title:<:mercadinss:1150786516822540298> | Itens}{description:<:commandsss:1145545130598740058> | Reparador de Vara de pesca
<a:maxcake:1143175399996653728> | Custo#COLON# 2.000 cupcakes}{color:20B2AA}};{actionRow:{button:Vara:2:vara_$authorID:false:$customEmoji[varinhassss;1134652368219291789]}{button:Pets:2:pets_$authorID:false:$customEmoji[catssd;1126987747815608381]}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==itens;]
  `
  },{

type: "interaction", // reparador
prototype: "button",
code:`
$interactionUpdate[;{newEmbed:{title:<:yespix:1143186374279843840> | Sucesso!}{description:<:varinhassss:1149120044463300638> | Você reparou sua vara de pesca com sucesso! Custou 2.000 cupcakes. <a:maxcake:1143175399996653728>}{color:20B2AA}};{actionRow:{button:Outros:4:outros_$authorID:true:$customEmoji[catssd;1126987747815608381]}}]
$setGlobalUserVar[cupcakes;$sub[$getGlobalUserVar[cupcakes;$authorID];2000];$authorID]
$setGlobalUserVar[vara;100;$authorID]
$if[$getGlobalUserVar[vara;$authorID] > 100]
$setGlobalUserVar[vara;$sum[$getGlobalUserVar[vara;$authorID];100];$authorID]
$onlyIf[$getGlobalUserVar[cupcakes;$authorID]>=2000;<:err:1145533683319705692> | <@$authorID>, você não possui essa quantia toda de cupcakes! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==vara;]
`
},{

   type: "interaction", // pets
prototype: "button",
code:`
$interactionUpdate[;{newEmbed:{title:<:mercadinss:1150786516822540298> | Pets}{description:<:duckjoia:1149845432533520394> | Compre o seu pet e seja feliz com ele!
<:lobos:1150805170935038074> | Dog#COLON# \`10.000\` cupcakes.
<:gatinas:1150805213565956217> | Gato#COLON# \`7.000\` cupcakes.
<:porcos:1150805293547147366> | Porco#COLON# \`15.000\` cupcakes.
<:vacas:1150805194997772381> | Vaca#COLON# \`20.000\` cupcakes.}{color:20B2AA}};{actionRow:{button:Dog:2:dog_$authorID:false:$customEmoji[lobos;1134652368219291789]}{button:Gato:2:gato_$authorID:false:$customEmoji[gatinas;1134652368219291789]}{button:Porco:2:porco_$authorID:false:$customEmoji[porcos;1134652368219291789]}{button:Vaca:2:vaca_$authorID:false:$customEmoji[vacas;1134652368219291789]}{button:Pets premium:2:ppp_$authorID:false:$customEmoji[istrela;1126987747815608381]}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==pets;]
  `
},{
type: "interaction", // dog
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:<:yespix:1143186374279843840> | Sucesso!}{description:<:lobos:1150805170935038074> | Você comprou seu pet (dog) com sucesso! Custou 10.000 cupcakes. <a:maxcake:1143175399996653728>}{color:20B2AA}};{actionRow:{button:Sucesso!:3:dog_$authorID:true:$customEmoji[lobos;1134652368219291789]}{button:Voltar:1:pets_$authorID:false:$customEmoji[catssd;1126987747815608381]}}]
$setGlobalUserVar[dog;<:lobos:1150805170935038074>;$authorID]
$setGlobalUserVar[pets; ;$authorID]
$setGlobalUserVar[cupcakes;$sub[$getGlobalUserVar[cupcakes;$authorID];10000];$authorID]
$onlyIf[$getGlobalUserVar[cupcakes;$authorID]>=10000;<:err:1145533683319705692> | <@$authorID>, você não possui essa quantia toda de cupcakes! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$getGlobalUserVar[dog;$authorID]!=<:lobos:1150805170935038074>; <@$authorID>, você já tem esse pet! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dog;]`

},{

  type: "interaction", // gato
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:<:yespix:1143186374279843840> | Sucesso!}{description:<:gatinas:1150805213565956217> | Você comprou seu pet (gato) com sucesso! Custou 7.000 cupcakes. <a:maxcake:1143175399996653728>}{color:20B2AA}};{actionRow:{button:Sucesso!:3:gato_$authorID:true:$customEmoji[gatinas;1134652368219291789]}{button:Voltar:2:pets_$authorID:false:$customEmoji[catssd;1126987747815608381]}}]
$setGlobalUserVar[gato;<:gatinas:1150805213565956217>;$authorID]
$setGlobalUserVar[pets; ;$authorID]
$setGlobalUserVar[cupcakes;$sub[$getGlobalUserVar[cupcakes;$authorID];7000];$authorID]

$onlyIf[$getGlobalUserVar[cupcakes;$authorID]>=7000;<:err:1145533683319705692> | <@$authorID>, você não possui essa quantia toda de cupcakes! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$getGlobalUserVar[gato;$authorID]!=<:gatinas:1150805213565956217>; <@$authorID>, você já tem esse pet! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==gato;]`
},{

    type: "interaction", // porco
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:<:yespix:1143186374279843840> | Sucesso!}{description:<:porcos:1150805293547147366> | Você comprou seu pet (porco) com sucesso! Custou 15.000 cupcakes. <a:maxcake:1143175399996653728>}{color:20B2AA}};{actionRow:{button:Sucesso!:3:porco_$authorID:true:$customEmoji[porcos;1134652368219291789]}{button:Voltar:2:pets_$authorID:false:$customEmoji[catssd;1126987747815608381]}}]
$setGlobalUserVar[porco;<:porcos:1150805293547147366>;$authorID]
$setGlobalUserVar[pets; ;$authorID]
$setGlobalUserVar[cupcakes;$sub[$getGlobalUserVar[cupcakes;$authorID];15000];$authorID]
$onlyIf[$getGlobalUserVar[cupcakes;$authorID]>=15000;<:err:1145533683319705692> | <@$authorID>, você não possui essa quantia toda de cupcakes! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$getGlobalUserVar[porco;$authorID]!=<:porcos:1150805293547147366>; <@$authorID>, você já tem esse pet! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==porco;]`
},{

     type: "interaction", // vaca
prototype: "button",
code:`
  $interactionUpdate[;{newEmbed:{title:<:yespix:1143186374279843840> | Sucesso!}{description:<:vacas:1150805194997772381> | Você comprou seu pet (vaca) com sucesso! Custou 20.000 cupcakes. <a:maxcake:1143175399996653728>}{color:20B2AA}};{actionRow:{button:Sucesso!:3:vaca_$authorID:true:$customEmoji[vacas;1134652368219291789]}{button:Voltar:2:pets_$authorID:false:$customEmoji[catssd;1126987747815608381]}}]
$setGlobalUserVar[vaca;<:vacas:1150805194997772381>;$authorID]
$setGlobalUserVar[pets; ;$authorID]
$setGlobalUserVar[cupcakes;$sub[$getGlobalUserVar[cupcakes;$authorID];20000];$authorID]
$onlyIf[$getGlobalUserVar[cupcakes;$authorID]>=20000;<:err:1145533683319705692> | <@$authorID>, você não possui essa quantia toda de cupcakes! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$getGlobalUserVar[vaca;$authorID]!=<:vacas:1150805194997772381>; <@$authorID>, você já tem esse pet! {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==vaca;]`
}]

