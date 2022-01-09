const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'Shows all available commands and their uses.',
    async execute(date, message, args, client) {
        try {
            if (!args[0]) {
                const helpEmbed = new MessageEmbed()
                    .setTitle('RollBot\'s Commands')
                    .setDescription('!`{command}`')
                    .setColor(message.guild.me.displayHexColor)
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter({ text: 'You can use `!help {command}` to get more information on a specific command.' })
                    .setTimestamp()

                filter = file => file.endsWith('.js')
                const command_files = fs.readdirSync('src/commands/').filter(filter);

                for (const file of command_files) {
                    const command = require(`../commands/${file}`);
                    if (command.name) {
                        helpEmbed.addField(`${command.name}`, `${command.description}`);

                    } else {
                        continue;
                    }
                }

                message.channel.send({ embeds: [helpEmbed] });

            } else {
                filter = file => file.endsWith('.js')
                const command_files = fs.readdirSync('src/commands/').filter(filter);

                for (const file of command_files) {

                    const command = require(`../commands/${file}`);

                    if (command.name === args[0]) {
                        message.channel.send(`\`\`\`\n${(command.name).toUpperCase()}\nDescription: ${command.description}\nUsage: ${command.usage}\nPermissions: ${command.permissions.join(', ')}\`\`\``);

                    } else {
                        continue;
                    }
                }
            }

        } catch (err) {
            console.error(err);
        }
    }
}
