module.exports = {
  name: "userinfo",
  aliases: ['ui', 'iu', 'infouser'],
  $ifv6: "old",
  $userRoles: "old",
  code: `
  $color[D2B48C]
  $thumbnail[$userAvatar[$mentioned[1;true]]]
$title[1;<:infoss:1145544492636717156> | User info - $username[$mentioned[1;true]]]
$description[1;
<:channelss:1145544976713916530> | **Nome e tag**: \`$username[$mentioned[1;true]]#$discriminator[$findUser[$mentioned[1;true]]]\`
<:ids:1128682851907416124> | **ID**: \`$findUser[$mentioned[1;true]]\`
<:calendarss:1145544681145512070> | **Criação da conta**: \`$creationDate[$findUser[$mentioned[1;true]]]\`
<:botsss:1145721206142685216> | **É um bot**? \`$replaceText[$replaceText[$isBot[$findUser[$mentioned[1;true]]];true;Sim;1];false;Não;1]\`
<:tagdc:1145544582583549993> | **Cargos**:
\`$replaceText[$userRoles[$findUser[$mentioned[1;true]]];, @everyone;.;1]\`]
$onlyIf[$memberExists[$findUser[$mentioned[1;true]]]!=false;<:err:1145533683319705692> | Esse usuário precisa estar no servidor.]
$reply
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]`
}