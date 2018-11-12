 Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome SPECIAL !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**سيرفر خورافي , كلان ماين كرافت 
نورنا؟
                               [ https://discord.gg/pTRCqzM ] 
... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**سيرفر خورافي , كلان ماين كرافت نورنا؟
                               [ https://discord.gg/pTRCqzM ] 
... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
