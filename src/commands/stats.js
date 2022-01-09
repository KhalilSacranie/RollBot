const sheetModel = require('../models/sheetSchema');

module.exports = {
    name: 'stats',
    description: 'Displays the current stat-sheet.',
    usage: '!stats',
    permissions: ['None'],
    async execute(date, message, args, client) {
        try {
            statSheet = await sheetModel.findOne({ sheetID: 'statSheet' });
            if (!statSheet) return message.reply('No stat-sheet was found. Contact a DM to create one.');

            message.channel.send(statSheet.link);

        } catch (err) {
            console.error(err);
        }
    }
}
