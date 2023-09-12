module.exports = [{

  name: 'perfil',
  aliases: ['p'],
  code: `
  $thumbnail[$userAvatar[$mentioned[1;true]]]
  $title[<:oculsss:1145739877703499826> | Perfil de $username[$mentioned[1;true]]]
$description[
> <:channelss:1145544976713916530> | Tag discord: \`$username[$mentioned[1;true]]#$discriminator[$findUser[$mentioned[1;true]]]\`
> <a:maxcake:1143175399996653728> | Cupcakes: \`$numberSeparator[$getGlobalUserVar[cupcakes;$mentioned[1;true]];.]\`
> <:vipsss:1145775827359907870> | É premium? \`$replaceText[$replaceText[$getGlobalUserVar[premium;$mentioned[1;true]];true;Sim;1];false;Não;1]\`
> <:emblss:1147139612268036156> | Emblemas: $textTrim[$getGlobalUserVar[dev;$mentioned[1;true]] $getGlobalUserVar[prem;$mentioned[1;true]] $getGlobalUserVar[poro;$mentioned[1;true]] $getGlobalUserVar[pprata;$mentioned[1;true]] $getGlobalUserVar[pbronze;$mentioned[1;true]] $getGlobalUserVar[sap;$mentioned[1;true]] $getGlobalUserVar[boost;$mentioned[1;true]] $getGlobalUserVar[tarta;$mentioned[1;true]] $getGlobalUserVar[queijo;$mentioned[1;true]] $getGlobalUserVar[cbugs;$mentioned[1;true]] $getGlobalUserVar[pizza;$mentioned[1;true]] $getGlobalUserVar[prim;$mentioned[1;true]] $getGlobalUserVar[secon;$mentioned[1;true]] $getGlobalUserVar[terc;$mentioned[1;true]] $getGlobalUserVar[cat;$mentioned[1;true]] $getGlobalUserVar[espada;$mentioned[1;true]] $getGlobalUserVar[estrela;$mentioned[1;true]] $getGlobalUserVar[emoji;$mentioned[1;true]]]

> <:coleirasss:1150816176440610887> | Pets:
$textTrim[$getGlobalUserVar[pets;$mentioned[1;true]] $getGlobalUserVar[dog;$mentioned[1;true]] $getGlobalUserVar[gato;$mentioned[1;true]] $getGlobalUserVar[porco;$mentioned[1;true]] $getGlobalUserVar[vaca;$mentioned[1;true]] $getGlobalUserVar[papagaio;$mentioned[1;true]] $getGlobalUserVar[raposa;$mentioned[1;true]] $getGlobalUserVar[galinha;$mentioned[1;true]]
$getGlobalUserVar[camelo;$mentioned[1;true]]]

<:anotasss:1145725689371299850> | Sobremim:
   $getGlobalUserVar[sobremim;$mentioned[1;true]]
]
$image[$getGlobalUserVar[banner;$mentioned[1;true]]]
$color[D2B48C]
$footer[Altere seu sobremim usando $getGuildVar[prefix]sobremim]
$reply
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]