const {EmbedBuilder} = require('discord.js')
const prettyMilliseconds = require('pretty-ms')
module.exports ={
    name:"ping",
    description:"bot ping",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setColor("Yellow")
        .setAuthor({name:"bot", iconURL:"https://discord.com/assets/6f26ddd1bf59740c536d2274bb834a05.png"})
        .setTitle("bot latency and uptime ")
        .addFields(
            {name:"Bot latency", value:`${client.ws.ping}` + 'ms'},
            {name:"Bot uptime", value:`${prettyMilliseconds(client.uptime)}`}
            )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
