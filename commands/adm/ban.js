module.exports = [{
    name: "ban",
    aliases: ["banir"],
    code: `
  $ban[$guildID;$findMember[$message[1];false];7;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especificado];false;$messageSlice[1]]]
  
<:juban:1145775737610178631> | <@$findMember[$message[1];false]> foi __banido__ do servidor \`$guildName[$guildID]\`.
<:anotasss:1145725689371299850> | Motivo: \`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especificado];false;$messageSlice[1]]\`.
<:oculsss:1145739877703499826> | Staff: <@$authorID>
    
  $onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<:err:1145533683319705692> | <@$authorID>, essa não! O cargo do usuário é maior que o seu.]

  $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<:err:1145533683319705692> | <@$authorID>, essa não! O cargo do usuário é maior que o meu!]

$onlyPerms[banmembers;<:err:1145533683319705692> | <@$authorID>, você não tem permissão de \`"Banir Membros"\`.]

$onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;<:err:1145533683319705692> | <@$authorID>, essa não! Eu não tenho permissão de \`"Banir Membros"\`.]

  $onlyIf[$findUser[$message[1];true]!=$clientID;<:err:1145533683319705692> | <@$authorID>, porquê está tentando me banir?]
  $onlyIf[$findUser[$message[1];true]!=$authorID;<:err:1145533683319705692> | <@$authorID>, não tente banir a si mesmo!]
  $onlyIf[$message[1]!=;<:err:1145533683319705692> | <@$authorID>, use o comando certo! \`$getGuildVar[prefix]ban @user (motivo se quiser)\`]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
}];