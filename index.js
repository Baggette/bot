const {Client, Intents, EmbedBuilder} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js')
const fs = require('fs')
const Prefix = process.env.Prefix
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