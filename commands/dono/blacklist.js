module.exports = [{
  name: 'bl',
code: `
✅
$setGlobalUserVar[blacklist;falso;$mentioned[1;true]]
$setGlobalUserVar[motivo;$noMentionMessage;$mentioned[1;true]]
$onlyForIDs[551374220953649181;apenas meu dono bl?]
`
// $onlyIf[$getGlobalUserVar[blacklist;$authorID]==falso;msg de erro.]
}]