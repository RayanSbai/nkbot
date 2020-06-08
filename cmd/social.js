exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "Welcome to TEAM SAQR",
    description: "**Follow our social media below:** \n \n <:ytb:708517544524513361> : **Youtube - يوتيوب** \n [SAQR's Youtube Channel](https://www.youtube.com/channel/UCJb9gt12ZSRE7BNca6Am92Q) \n \n <:twitter:708520586611130398> : **Twitter - تويتر** \n [SAQR's Twitter](https://twitter.com/TeamSAQR) \n \n <:twitch:708520582068568074>: **Twitch - تويتش** \n [SAQR's Twitch Streamers](https://www.twitch.tv/team/saqresport) \n \n <:insta:708521302214049843> : **Instagram - أنستغرام** \n [SAQR's Instagram](https://www.instagram.com/saqr/) \n \n <:saqrscrims:708522187518377984> : **SAQR Scrims - صقر سكريمز** \n [SAQR Scrims's Discord Server](https://discord.gg/C69zPEB) \n \n <:site:708520584937734204> : **SAQR Website - موقع صقر** \n [SAQR's Website](https://saqr.venomx.me) ",
    image: {url: "https://d.top4top.io/p_1589wni881.png"},
    color: client.config.color
  }})
  .then(msg =>
  {
    let emoji = message.guild.emojis.find(e => e.name == "saqr");
    if (emoji) msg.react(emoji);
    
    client.db.set("custommsg", msg.id).write();
  });
}