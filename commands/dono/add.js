module.exports = [{
name: 'add',
$if: "old",
code: `
🟢
$if[$message[1]==boost]
$setGlobalUserVar[boost;<:boosst:1145775862524940379>;$mentioned[1;true]]
$endif
$if[$message[1]==cupcakes]
$setGlobalUserVar[cupcakes;$sum[$getGlobalUserVar[cupcakes;$mentioned[1;true]];$message[3]];$mentioned[1;true]]
$endif
$if[$message[1]==banner]
$setGlobalUserVar[banner;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgcnPaISGDyRFrPElayC5icAqij6m8WtzgQ&usqp=CAU;$mentioned[1;true]]
$endif
$if[$message[1]==premium]
$setGlobalUserVar[premium;true;$mentioned[1;true]]
$endif
$if[$message[1]==premium]
$setGlobalUserVar[prem;<:vipsss:1145775827359907870>;$mentioned[1;true]]
$endif
$if[$message[1]==ouro]
$setGlobalUserVar[poro;<:poro:1147139844116598865>;$mentioned[1;true]]
$endif
$if[$message[1]==prata]
$setGlobalUserVar[pprata;<:pprata:1147139805432528967>;$mentioned[1;true]]
$endif
$if[$message[1]==bronze]
$setGlobalUserVar[pbronze;<:pbronz:1147139882192474193>;$mentioned[1;true]]
$endif
$onlyForIDs[551374220953649181;apenas meu dono bl?]
` // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgcnPaISGDyRFrPElayC5icAqij6m8WtzgQ&usqp=CAU
// $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;msg de erro.]
}]