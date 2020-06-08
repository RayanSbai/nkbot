exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "SAQR Store",
    description: "**History & Background** \n Falcon Home Entertainment Co LLC (FHEC) was incorporated in the year 1993, with the opening of their Music and Home Video store at Al Nasr a high street in Doha. This store traded in categories Music, Home Video and Accessories. The distribution of Music and Home Video was set up during the year 1983 and FHEC was soon distributing all major Music Labels and Home Video studios to all retailers in the city of Doha. In a short while, FHEC opened retail stores at other locations in quick succession to form a music and home video retail chain thus covering all the major shopping areas and the malls in Doha. This was the only retail chain for these categories in Doha. This Chain of stores was separated from FHEC in the year 2007 to form SAQR. \n \n **Vision** \n To be the preferred retailer for Music, Movies, Gaming, Toys, Gadgets, and Fashion by providing an exhaustive range of titles, unparallel customer service, good product quality, a warm and friendly shopping ambiance and by being the first to introduce new product categories. \n \n <:site:708520584937734204> - **[https://saqronline.com/](https://saqronline.com/)** \n \n <:insta:708521302214049843> - **[https://www.instagram.com/saqrstore/](https://www.instagram.com/saqrstore/)** \n \n <:twitter:708520586611130398> - **[https://twitter.com/saqrstore](https://twitter.com/saqrstore)**",
    image: {url: "https://i.top4top.io/p_1590didqi1.png"},
    footer: {text: "#Thankyousaqrstore"},
    color: client.config.color
  }})
  
}