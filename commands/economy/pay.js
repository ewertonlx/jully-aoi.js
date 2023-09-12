module.exports = [{

  name: 'pay',
  aliases: ['pagar'],
  code: `
  $setGlobalUserVar[cupcakes;$sum[$getGlobalUserVar[cupcakes;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setGlobalUserVar[cupcakes;$sub[$getGlobalUserVar[cupcakes;$authorID];$noMentionMessage];$authorID]
  
<a:maxcake:1143175399996653728> | <@$authorID>, você enviou \`$numberSeparator[$noMentionMessage;.]\`cupcakes para o usuário <@$mentioned[1]>. 


  $onlyIf[$mentioned[1;yes]!=$authorID;<:err:1145533683319705692> | <@$authorID>, você não pode enviar \`cupcakes\`para si mesmo(a).]
  $onlyIf[$checkContains[$noMentionMessage;-;.;%;$;#;@;!˜;,]==false;<:err:1145533683319705692> | <@$authorID> por favor, não use símbolos ou algo do tipo!]
  $onlyIf[$isNumber[$noMentionMessage]==true;<:err:1145533683319705692> | <@$authorID>, digite alguma quantia de cupcakes para enviar.]

  $onlyIf[$mentioned[1;no]!=undefined;<:err:1145533683319705692> | <@$authorID>, você precisa mencionar alguém para enviar cupcakes!]
  $onlyIf[$getGlobalUserVar[cupcakes;$authorID]>=$noMentionMessage;<:err:1145533683319705692> | <@$authorID>, você não possui essa quantia toda de cupcakes!]
  $let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage;k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
 $reply 
 $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
  `
}]