const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("613151313185865731")
setInterval(function() {
channel.send(`fafres fare fare fare`);
}, 30)
})

client.login(process.env.BOT_TOKEN);