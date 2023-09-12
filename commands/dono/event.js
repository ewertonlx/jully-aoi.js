module.exports = [{
name: "sapo",
code: `
$title[<:sapo:1147146589543084052> | Sapo raro]
$description[<:sapo:1147146589543084052> | Aperte na reação para garantir o emblema do sapo]
$color[Random]    $addButton[1;sapo;secondary;sapo;false;<:sapo:1147146589543084052>]
$onlyForIDs[551374220953649181;apenas meu dono bl?]
`
},{
  name: "sapo",
type: "interaction",
prototype: "button",
code: `
$interactionReply[(<:sapo:1147146589543084052>) Emblema resgatado!;;;;everyone;true]
$setGlobalUserVar[sap;<:sapo:1147146589543084052>;$authorID]
`}]