module.exports = [{
  name: "slot",
  code: `


$editMessage[$get[id];|$get[s1]|$get[s2]|$get[s3]|
$nonEscape[$if[$checkCondition[$get[s1]==$get[s2]&&$get[s2]==$get[s3]&&$get[s3]==$get[s1]]==true;Você ganhou;Você perdeu!]]]
$let[s3;$randomText[💵;💎;🥇;💯;💰]]
$wait[2s]

$editMessage[$get[id];|$get[s1]|$get[s2]|<:onai:1145545026470957096>|] 
$let[s2;$randomText[💰;💯;💎;💵;🥇]]
$wait[2s]
  
$editMessage[$get[id];|$get[s1]|<:instss:1145775766936748103>|<:onai:1145545026470957096>|]   
$let[s1;$randomText[💎;🥇;💯;💰;💵]]
$wait[2s]   
    
$let[id;$sendMessage[|<:offss:1145775790802337792>|<:instss:1145775766936748103>|<:onai:1145545026470957096>|;true]]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;<:proibidossss:1148673909823115305> | <@$authorID>, você está na minha blacklist pelo motivo: \`$getGlobalUserVar[motivo;$authorID]\` e não poderá utilizar os meus comandos.]
`}]