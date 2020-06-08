exports.run = (client, message, args) =>
{
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    .setAuthor("TEAM SAQR Help Menu")
    .setThumbnail(client.user.avatarURL)
    .setColor(client.config.color)
    .setDescription("Here's my list of commands!");
  
  const cmds =
  [
    [
      "Developer",
      "eval",
      "ping"
    ],
    [
      "Admin",
      "addpoints <@member> <points>",
      "akm",
      "dm <message>",
      "gainpoints <@member> <kills> <position>",
      "help",
      "kk",
      "move <voice channel>",
      "mkn",
      "nk",
      "pin [<#channel>] <message>",
      "ping",
      "points [<@member>]",
      "store",
      "removepoints <@member> <points>",
      "rules",
      "say <message>",
      "social",
      "setpoints <@member> <points>",
      "wrath"
      
    ]
  ];
  
  for (let i = 0; i < cmds.length; i++)
  {
    embed.addField(cmds[i].shift(), join(cmds[i]));
  }
  
  message.channel.send(embed);
}

function join(array)
{
  let msg = "";
  for (let i = 0; i < array.length; i++) msg += "- `!saqr " + array[i] + "`\n";
  return msg;
}