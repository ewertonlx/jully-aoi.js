module.exports = [{
    name: "mute",
    aliases: ["tt", "timeout", "m"],
    code: `
<:juban:1145775737610178631> | <@$findMember[$message[1];false]> foi __castigado/mutado__. 
<:anotasss:1145725689371299850> | Motivo: $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Motivo não especificado];false;$messageSlice[2]]
<:timerss:1145535331484061776> | Tempo adicionado: $message[2]
<:oculsss:1145739877703499826> | Staff: <@$authorID>

$let[end;$timeoutMember[$guildID;$findMember[$message[1];false];$message[2];true;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Motivo não especificado];false;$messageSlice[2]]]] 


$suppressErrors[<@$authorID>, talvez você tenha usado o comando errado ou mencionou algum BOT. Tente mencionar um usuário \`REAL\` para mutar. ]
$onlyPerms[moderatemembers;<:err:1145533683319705692> | <@$authorID>, você não tem permissão de \`"Moderar Membros"\` / \`"Castigar Membros"\`.]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;<:err:1145533683319705692> | <@$authorID>, essa não! Eu não tenho permissão de \`"Moderar Membros"\` / \`"Castigar Membros"\`.]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<:err:1145533683319705692> | <@$authorID>, essa não! O cargo do usuário é maior que o meu!]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<:err:1145533683319705692> | <@$authorID>, essa não! O cargo do usuário é maior que o seu.]

$onlyIf[$findUser[$message[1];true]!=$authorID;<:err:1145533683319705692> | <@$authorID>, não tente castigar/mutar a si mesmo!]

$onlyIf[$findUser[$message[1];true]!=$clientID;<:err:1145533683319705692> | <@$authorID>, porquê está tentando me castigar/mutar ?]

$onlyIf[$message[1]!=;<:err:1145533683319705692> | <@$authorID>, use o comando certo! \`$getGuildVar[prefix]mute [@user] [tempo] (motivo)\`]
$onlyIf[$message[2]!=;<:err:1145533683319705692> | <@$authorID>, use o comando certo! \`$getGuildVar[prefix]mute [@user] [tempo] (motivo)\`]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}]