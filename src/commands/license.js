const fs = require('fs');

module.exports = {
    name: 'license',
    description: 'Shows the Bot\'s license and repo',
    aliases: ['repo'],
    permissions: ['None'],
    async execute(date, message, args, client) {
        try {
            const data = fs.readFileSync('./LICENSE', 'utf-8');
            const license = `\`\`\`${data}\`\`\`RollBot's Repository: https://github.com/KhalilSacranie/RollBot.com`;
            message.channel.send(license);

        } catch (err) {
            console.error(err);
        }
    }
}
