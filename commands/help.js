const {EmbedBuilder} = require('discord.js')
module.exports={
    name:"help",
    description:"Displays the commmands for the bot",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle("Help")
        .setDescription("Displays the commands for this bot")
        .addFields(
            {name:"`b!ban`", value:"Bans a member"},
            {name:"`b!unban`", value:"Unbans a user (needs the user id)"},
            {name:"`b!kick`", value:"Kicks a user"},
            {name:"`b!music`", value:"Shows the music commands for the bot"},
            {name:"`b!economy`", value:"Shows the economy commands for this bot"},
            {name:"`b!mcping <server> <port>`", value:"Pings a minecraft server"}
        )
    }
}