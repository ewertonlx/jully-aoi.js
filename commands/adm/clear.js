module.exports = [{
    name: "clear",
    aliases: ['limpar'],
    code: `
    <:linguass:1145726462733860895> | Tia da limpeza passando! 
<:yespix:1143186374279843840> | Sucesso <@$authorID>! Foram limpas $message[1] mensagens!
    $clear[$message[1]]
    $onlyIf[$isNumber[$message[1]]==true;<:err:1145533683319705692> | <@$authorID>, é necessário colocar números na quantia. Por favor, não use letras!]
    $onlyIf[$checkContains[$noMentionMessage;-;.;%;$;#;@;!˜;,]==false;<:err:1145533683319705692> | <@$authorID> por favor, não use símbolos ou algo do tipo!]
    $onlyIf[$message[1]>=5;<:err:1145533683319705692> | <@$authorID>, coloque uma quantia maior ou igual à 5.]
    $onlyIf[$message[1]<=100;<:err:1145533683319705692> | <@$authorID>, coloque uma quantia menor ou igual à 100.]
    $argsCheck[1;<:err:1145533683319705692> | <@$authorID>, digite alguma quantia de mensagens que deseja limpar/apagar]
    $onlyClientPerms[managemessages;<:raivassd:1145746167137849475> | <@$authorID>, essa não! Eu não tenho permissão de \`"Gerenciar mensagens"\` para poder limpar as mensagens!]
    $onlyPerms[managemessages;<:raivassd:1145746167137849475> | <@$authorID>, você não tem permissão de \`"Gerenciar mensagens"\` para usar este comando!]
    $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]