const { Client, Intents, Collection } = require('discord.js');
const { PrismaClient } = require('@prisma/client');

require('dotenv').config({ path: '.env' });
const token = process.env.BOT_TOKEN;

const prisma = new PrismaClient();

console.clear();

async function main() {
    await prisma.$connect()
        .then(async () => {
            console.log('\x1b[32m%s\x1b[0m', 'Connected to the database ...');
        }).catch((err) => {
            console.error(err);
        });

    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

    client.commands = new Collection();
    client.events = new Collection();

    ['command_handler', 'event_handler'].forEach(handler => {
        require(`./handlers/${handler}`)(client, prisma);
    });

    await client.login(token);
}

main()
    .catch((err) => {
        console.error(err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
