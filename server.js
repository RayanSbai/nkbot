const express  = require('express');
const app      = express();
const Discord  = require("discord.js");
const client   = new Discord.Client();
const PORT = process.env.port || 4000

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./data/db.json");
const db = low(adapter);

db.defaults({})
  .write();

client.db = db;
client.config = require("./data/config.json");

// On Startup
client.on("ready", () =>
{
  console.log("Bot is up and running!");
  client.user.setActivity("NK LIVE", {type: 'STREAMING', url : 'https://www.twitch.tv/saqr_nk'}).catch(console.error);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

// On receiving a message
client.on("message", message =>
{
  try { require("./response.js").run(client, message); }
  catch (err) { console.log(err); }
});

// On Member Join
client.on("guildMemberAdd", member =>
{
  try { require("./member.js").add(client, member); }
  catch (err) { console.log(err); }
});

// On Member Remove
client.on("guildMemberAdd", member =>
{
  try { require("./member.js").remove(client, member); }
  catch (err) { console.log(err); }
});


// Login Discord Bot
client.login(process.env.token);
