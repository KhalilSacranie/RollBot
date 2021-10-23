require('dotenv').config({ path: '.env' });
const ownerID = process.env.OWNERID;

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    async execute(message, args) {
        if (message.author.id === ownerID) {
            if (!args[0]) return message.reply('Please enter the amount of messages that you want to clear!');
            if (isNaN(args[0])) return message.reply('Please enter a real number!');

            if (args[0] > 100) return message.reply('Please enter a number below 100 messages!');
            if (args[0] < 1) return message.reply('Please enter a number above 1!');

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });

            message.channel.send(`Deleted ${args[0]} messages`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000);
                })
                .catch();
            
            await console.log(`${message.author.username} deleted ${args[0]} messages from channel ${message.channelId}`)

        } else {
            message.reply('You do not have permission to use this command.')
        }
    }
}
