module.exports = [{
    name: "unban",
    aliases: ["UNBAN", "Unban"],
    code: `
    $suppressErrors[]
    $unban[$guildID;$findUser[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especificado];false;$messageSlice[1]]]
    
<:juban:1145775737610178631> | <@$findUser[$message[1];false]> foi __desbanido__ do servidor. 
<:anotasss:1145725689371299850> | Motivo: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especificado];false;$messageSlice[1]]
<:oculsss:1145739877703499826> | Staff: <@$authorID>

    $onlyIf[$isBanned[$guildID;$findMember[$message[1];false;$guildID]]==true;<:err:1145533683319705692> | <@$authorID>, este usuário não está banido. Confira se o ID fornecido está correto e tente novamente!]
    
    $onlyPerms[banmembers;<:err:1145533683319705692> | <@$authorID>, você não tem permissão de \`"Banir Membros"\`.]

    $onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;<:err:1145533683319705692> | <@$authorID>, essa não! Eu não tenho permissão de \`"Banir Membros"\`.]
    
    $onlyIf[$findMember[$message[1];false]!=$authorID;<:err:1145533683319705692> | <@$authorID>, não tente se desbanir!]

    $onlyIf[$message[1]!=;<:err:1145533683319705692> | <@$authorID>, use o comando certo! \`$getGuildVar[prefix]unban [@user] (motivo se quiser)\`]
    $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]