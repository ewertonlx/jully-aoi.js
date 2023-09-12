module.exports = [{

  name: "inventario",
  aliases: ['inv','iv'],
  code: `
  $title[Inventário de $username[$mentioned[1;true]]]
  $description[
  <:mochilaaa:1149763230265262140> | Itens:
<:peixasss:1149119988335128677> | $getGlobalUserVar[peixe;$mentioned[1;true]] peixes
<:cobrisse:1150592439724277760> | $getGlobalUserVar[cobre;$mentioned[1;true]] cobres

 <:onai:1145545026470957096> | Status equipamentos:
  <:varinhassss:1149120044463300638> Vara de pesca: $getGlobalUserVar[vara;$mentioned[1;true]]%]
  $color[FFDAB9]
  $reply
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
  `
}]