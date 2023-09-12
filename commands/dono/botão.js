module.exports = [{
name: "botao",
code: `
$title[Author Button]
$description[Press the Button!]
$color[Random]    $addButton[1;Example;primary;aaa_$authorID;false]
`
},{
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed{title:{oi<:nerdssss:1145745799523864576>}};;;;everyone;false]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]; Isto não é para você! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==aaa;]`
}]