const { raw } = require("@distube/yt-dlp")

module.exports={
    name:"unban",
    description:"unbans a user",
    execute: async(client, message, args) =>{
        const guild = await client.guilds.fetch(message.guildId)
         if(!args[0]){
             message.channel.send("Please mention someone to ban or provide their id")
             return
        }else if(args[0]){
             if(!guild.members.me.permissions.has('BanMembers')){
                message.channel.send('I cannot unban this person')
            return 
        }else if(!message.member.permissions.has("BanMembers")){
            message.channel.send(`You do not have perms to unban \```${args[0]}\````)
            return
        }else if(isNaN(args[0])){
            message.channel.send("That is not a valid id")
            return
        }
                const rawid = args[0]
                const id = parseInt(rawid)
                console.log(id)
                guild.members.unban(id)
                .then(user => message.channel.send(`<@${id}> was successfully unbanned`))
                .catch(
                    console.error,
                    message.channel.send("That is not a valid id or the user is not banned")
                ) 
         }
    }
}