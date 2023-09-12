module.exports = [{

  name: 'botinfo',
  aliases: ['bi','bot'],
  code: `
$title[<:botsss:1145721206142685216> | Jully info]
$description[<:heartssss:1145722557828436018> | Olá <@$authorID>, me chamo Jully mas a galera gosta de me chamar de Ju! 
Duas curiosidades minhas é que eu amo cupcakes e gatos! <a:maxcake:1143175399996653728><:catssd:1145725759936278618> 

<:anotasss:1145725689371299850> | **SOBRE MIM:**
  
<:tagdc:1145544582583549993> | Tag discord: *Jully Bot#1739*
<:discss:1145544843444097076> | Meu ID: \`$clientID\`
<:calendarss:1145544681145512070> | Fui criada em: \`$creationDate[1146437797058707460]\`
<:onai:1145545026470957096> | Estou online há: **$uptime**
<:owersss:1145544905956003850> | Devs: *@ewerton.dev#0*, *@a0rx#0* e *@kadus1*
<:barra:1128704018307354655> | Atualmente eu tenho: \`$commandsCount\` comandos!
<:foxworld:1132837507432718438> | Meu prefixo global: **j.**
<:commandsss:1145545130598740058> | Prefixo neste servidor: **$getGuildVar[prefix]**

<:linguass:1145726462733860895> | **ESTATÍSTICAS**

<:foxworld:1132837507432718438> | Jogando em: \`$guildCount\` servidores
<:membersss:1145544779183177831> | Ouvindo: \`$allmembersCount\` membros
<:channelss:1145544976713916530> | Gerenciando: \`$allChannelsCount\` canais

<:istrela:1145726783640064081> | **OUTROS**

<:addds:1145545083916124170> | [Me adicione](https://discord.com/api/oauth2/authorize?client_id=1146437797058707460&permissions=8&scope=applications.commands%20bot)
<:commandsss:1145545130598740058> | [Support](https://discord.gg/P8QJjRa7CG)
<:linksssss:1147552571851018280> | [WebSite](https://jully-site.renderforestsites.com/) ]
$footer[© WebSite criado por b4all#0]
$image[https://cdn.discordapp.com/attachments/1144833732574969878/1149794218630447114/20230908_165109.jpg]
$color[D2B48C]
$reply
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`
}]