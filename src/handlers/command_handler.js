const fs = require('fs');

module.exports = async (client, prisma) => {
    filter = file => file.endsWith('.js')

    const command_files = fs.readdirSync('src/commands/').filter(filter);

    console.log('Loading Command Files...\n');

    for (const file of command_files) {
        const command = require(`../commands/${file}`);
        if (command.permissions === 'admin' && !message.author.roles.cache.get("910208799443398717")) return;
        if (command.name) {
            await client.commands.set(command.name, command);
            console.log(`Loaded command: ${command.name}`);

        } else {
            continue;
        }
    }

    console.log('\n');
}