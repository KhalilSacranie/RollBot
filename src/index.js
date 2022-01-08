const { Client, Intents, Collection, Guild } = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');

require('dotenv').config();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const srv = process.env.SRV

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.commands = new Collection();

const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

console.clear();

client.once('ready', async () => {
    console.log('Ready!');
    client.channels.cache.get('901549373173948427').send('<@543084123460337675> Bot is now online.');
});

mongoose.connect(srv, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() => {
    console.log('Connected to the database.')
}).catch((err) => {
    console.error(err)
});

client.on('messageCreate', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'roll') {
        client.commands.get('roll').execute(message, args);

    } else if (command === 'userinfo') {
        client.commands.get('userinfo').execute(message, args, client);

    } else if (command === 'stats') {
        client.commands.get('stats').execute(message, args, client);

    } else if (command === 'weapons') {
        client.commands.get('weapons').execute(message, args, client);

    } else if (command === 'spells') {
        client.commands.get('spells').execute(message, args, client);

    } else if (command === 'terminate') {
        client.commands.get('terminate').execute(message, args, client);

    } else if (command === 'createlore') {
        client.commands.get('createlore').execute(message, args, client);

    } else if (command === 'lore') {
        client.commands.get('lore').execute(message, args, client);
        
    } else if (command === 'deletelore') {
        client.commands.get('deletelore').execute(message, args, client);
        
    } else if (command === 'purge') {
        client.commands.get('purge').execute(message, args, client);
        
    } 

    message.reply('Mr Meow is Supreme!');

});

client.login(token);
