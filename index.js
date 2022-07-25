const {Client, Intents, EmbedBuilder} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js')
const fs = require('fs')
const Prefix = process.env.PREFIX
const { DisTube } = require('distube')
const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildVoiceStates"
    ]
});
const { YtDlpPlugin } = require('@distube/yt-dlp')
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new YtDlpPlugin()
  ]
})
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
client.on('ready', () => {
    console.log('bot is online')
    client.user.setPresence({ activities: [{ name: `Listening to ${Prefix}help` }], status: 'active' });
});
// command
client.on('messageCreate', (message) => { 
    if (!message.content.startsWith(Prefix) || message.author.bot) return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.get(command)) {
        return
    }

    client.commands.get(command).execute(client, message, args)

});
client.login(process.env.TOKEN)