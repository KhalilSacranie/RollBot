const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');

require('dotenv').config();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.commands = new Collection();

const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Ready!');
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

    } 

});

client.login(token);
