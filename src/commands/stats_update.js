const sheetModel = require('../models/sheetSchema');

module.exports = {
    name: 'stats_update',
    description: 'Updates the stat-sheet.',
    permissions: ['Admin'],
    async execute(date, message, args, client) {
        if (message.author.id != '543084123460337675') return message.reply('You don\'t have permission to use this command.');
        if (!args[0]) return message.reply('Please enter a new link');

        const newLink = args[0];

        try {
            statSheet = await sheetModel.findOne({ sheetID: 'statSheet' });
            if (!statSheet) {
                let sheet = await sheetModel.create({
                    sheetID: 'statSheet',
                    link: newLink,
                });
                await sheet.save();

            } else {
                await sheetModel.findOneAndUpdate({ sheetID: 'statSheet' }, { link: newLink });
            }

            await client.channels.cache.get('929529731194450021').send(`\`\`\`${message.author.id} updated the stat-sheet to \`${newLink}\`\n${date}\`\`\``);
            console.log('The new stat-sheet is ' + newLink);
            message.reply('The new stat-sheet is ' + newLink);

        } catch (err) {
            console.error(err);
        }
    }
}
