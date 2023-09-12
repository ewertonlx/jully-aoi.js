module.exports = ({
    name: "avatar",
  aliases: ['av'],
    code: `
    $author[1;$username;$userAvatar[$authorID]]
    $description[1;<:rindsss:1145746233688862732> | Que avatar lindo!
    $image[1;$userAvatar[$findMember[$message[1;true]];2048]]
    $color[1;D2B48C]
    $reply
    $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
})