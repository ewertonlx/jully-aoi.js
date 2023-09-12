module.exports = {

  name: "rank",
  aliases: ['ranking', 'leaderboard', 'placar', 'top'],
  code: `

$title[<:tpp1:1131344754848841884> | Ranking Global]
$description[$globalUserLeaderBoard[cupcakes;asc;{top} - **{username}** - *{value}* **cupcakes**;10;1;main]
$globalUserLeaderBoard[cupcakes;asc;{top} - **{username}** - {value};10;2;main]
$color[D2B48C]
]
$thumbnail[https://cdn.discordapp.com/attachments/1128091251191849145/1149085909615136819/top1.png?ex=64fa3925&is=64f8e7a5&hm=36c8c4c6db97e293163c629ea7c19096d9d3847fce2c7d6cda9227fdf0f3cb22&]
$reply
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`

} 