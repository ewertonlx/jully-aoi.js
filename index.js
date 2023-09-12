//|------------|
const express = require('express');
const app = express();
const { Util } = require("aoi.js");
const { setup } = require("@akarui/aoi.parser");
setup(Util);

app.get('/', (req, res) => {
    res.send('To online!!');
});

app.listen(3000, () => {
    console.log('To online!!');
});  

const aoijs = require("aoi.js");


const bot = new aoijs.AoiClient({
token: process.env['TOKEN'],
prefix: "$getGuildVar[prefix;$guildID]",
intents: ["MessageContent", "GuildMessages", "Guilds"],
events: ["onMessage", "onInteractionCreate"]
})

bot.status({
 text: "em $guildCount servidores!",
 type: "PLAYING",
//PLAYING
//WATHING
//LISTENING
//STREAMING
//COMPETING
 status: "Idle",
 time: 12
})

bot.variables({
  cor: "#303136",
  prefix: "j.",
})

bot.variables({
  cupcakes: "0",
  sobremim: "A Jully é a melhor!",
  boost: "",
  dev: "",
  prem: "",
  poro: "",
  pprata: "",
  pbronze: "",
  dias: "",
  sap: "",
  tarta: "",
  queijo: "",
  cbugs: "",
  premium: "false",
  pizza: "",
  prim: "",
  secon: "",
  terc: "",
  cat: "",
  espada: "",
  estrela: "",
  emoji: "",
  banner: "https://cdn.discordapp.com/attachments/1139345429180453034/1147140890591240242/37c68ff0d0b664704990c337f9cddf4b.jpg",
  vara: "100",
  peixe: "0",
  blacklist: "falso",
  motivo: "Não especificado",
  dog: "",
  gato: "",
  raposa: "",
  papagaio: "",
  vaca: "",
  porco: "",
  galinha: "",
  camelo: "",
  cobre: "0",
  ferro: "0",
  ouro: "0",
  dima: "0",
  netherite: "0",
  pets: "Nenhum"

})
  const loader = new aoijs.LoadCommands(bot)
  loader.load(bot.cmd,"./commands/")