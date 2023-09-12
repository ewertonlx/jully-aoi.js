module.exports = [{
    name: "unmute",
    aliases: ["removetimeout", "untimeout", "untt","unm"], 
    code: `
$let[end;$timeoutMember[$guildID;$findMember[$message[1];false];0;true;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Motivo não especificado];false;$messageSlice[2]]]]

<:juban:1145775737610178631> | O mute/castigo de<@$findMember[$message[1];false]> foi __removido__.
<:anotasss:1145725689371299850> | Motivo: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especificado];false;$messageSlice[1]]
<:oculsss:1145739877703499826> | Staff: <@$authorID>

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];<:err:1145533683319705692> | <@$authorID>, essa não! O cargo do usuário é maior que o meu!]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];<:err:1145533683319705692> | <@$authorID>, essa não! O cargo do usuário é maior que o seu.]

$onlyPerms[moderatemembers;<:err:1145533683319705692> | <@$authorID>, você não tem permissão de \`"Moderar Membros"\` / \`"Castigar Membros"\`.]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;<:err:1145533683319705692> | <@$authorID>, essa não! Eu não tenho permissão de \`"Moderar Membros"\` / \`"Castigar Membros"\`.]

$onlyIf[$memberExists[$findMember[$message[1];false]]==true;<:err:1145533683319705692> | <@$authorID>, procurei por todo lugar mas não encontrei esse usuário!]

$onlyIf[$findMember[$message[1];false]!=$authorID;<:err:1145533683319705692> | <@$authorID>, não tente diminuir o tempo limite.]

$onlyIf[$message[1]!=;<:err:1145533683319705692> | <@$authorID>, use o comando certo! \`$getGuildVar[prefix]unmute [@user] (motivo)\`]

$onlyIf[$isTimeout[$guildID;$findMember[$message[1];false]]==true;<:err:1145533683319705692> | <@$authorID>, este usuário não está mutado/castigado!]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
}]