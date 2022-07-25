const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"economy",
    description:"Get info about the economy",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setColor('Yellow')
        .setTitle("coins")
        .setDescription("some info about the built in economy for this bot")
        .addFields(
            {name:"`b!work`", value:"Work for more coin"},
            {name:"`b!daily`", value:"Claim some free coin each day"},
            {name:"`b!weekly`", value:"Claim a bunch of coin weekly"},
            {name:"`b!balance`", value:"View your current balance"},
            {name:"`b!deposit`", value:"Deposit coins into your bank account"},
            {name:"`b!withdraw`", value:"Withdraw coins from your bank account"},
            {name:"`b!shop`", value:"If unsure what to do run `b!shop help`"},
            {name:"`b!lb`", value:"See the coin leaderboard for this server"}     
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
