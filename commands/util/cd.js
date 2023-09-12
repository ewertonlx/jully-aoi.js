module.exports = {
  name: "cooldown",
  aliases: "cd",
  code: `
  $reply
$title[<:rindsss:1145746233688862732> | Cooldowns de $username[$mentioned[1;true]]]
$description[
<:membersss:1145544779183177831> | **Comandos normais**

<:istrela:1145726783640064081> | *Daily*
$getGuildVar[prefix]daily
$replaceText[$replaceText[$checkContains[$getCooldownTime[1d;server;daily;$mentioned[1]];-];true;<:yespix:1143186374279843840> | Disponível!];false;<:nopix:1143186309914054768> $humanizeMs[$getCooldownTime[1d;server;daily;$mentioned[1]]]]

<:istrela:1145726783640064081> | *Work*
$getGuildVar[prefix]work
$replaceText[$replaceText[$checkContains[$getCooldownTime[2m;server;work;$mentioned[1]];-];true;<:yespix:1143186374279843840> | Disponível!];false;<:nopix:1143186309914054768> $humanizeMs[$getCooldownTime[2m;server;work;$mentioned[1]]]]

<:istrela:1145726783640064081> | *Pescar*
$getGuildVar[prefix]pescar
$replaceText[$replaceText[$checkContains[$getCooldownTime[5m;server;pescar;$mentioned[1]];-];true;<:yespix:1143186374279843840> | Disponível!];false;<:nopix:1143186309914054768> $humanizeMs[$getCooldownTime[5m;server;pescar;$mentioned[1]]]]

<:vipsss:1145775827359907870> | **Comandos premium**

<:istrela:1145726783640064081> | *Daily premium*
$getGuildVar[prefix]pdaily
$replaceText[$replaceText[$checkContains[$getCooldownTime[1d;server;pdaily;$mentioned[1]];-];true;<:yespix:1143186374279843840> | Disponível!];false;<:nopix:1143186309914054768> $humanizeMs[$getCooldownTime[1d;server;pdaily;$mentioned[1]]]]

<:istrela:1145726783640064081> | Semanal: 
$getGuildVar[prefix]semanal
$replaceText[$replaceText[$checkContains[$getCooldownTime[7d;server;semanal;$mentioned[1]];-];true;<:yespix:1143186374279843840> | Disponível!];false;<:nopix:1143186309914054768> $humanizeMs[$getCooldownTime[7d;server;semanal;$mentioned[1]]]]

<:istrela:1145726783640064081> | *Barco*
$getGuildVar[prefix]barco
$replaceText[$replaceText[$checkContains[$getCooldownTime[1h;server;barco;$mentioned[1]];-];true;<:yespix:1143186374279843840> | Disponível!];false;<:nopix:1143186309914054768> $humanizeMs[$getCooldownTime[1h;server;barco;$mentioned[1]]]]
]
$color[D2B48C]
$thumbnail[$userAvatar[$mentioned[1;true]]]
$onlyIf[$isBot[$mentioned[1]]==false;<:err:1145533683319705692> | <@$authorID>, Não mencione bots!]
$onlyIf[$mentioned[1]!=;<:err:1145533683319705692> | <@$authorID>, mencione um usuário válido!]
$onlyIf[$checkContains[$message;
]==false;<:err:1145533683319705692> | <@$authorID>, Por favor, não use quebra de linha!]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
}