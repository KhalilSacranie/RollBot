const { Client, Intents, Collection } = require('discord.js');
const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
const token = process.env.BOT_TOKEN;
const srv = process.env.SRV;

console.clear();

mongoose.connect(srv, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () =>{
    console.log('\x1b[32m%s\x1b[0m', 'Connected to the database ...')
}).catch((err) => {
    console.error(err);
});

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(token);