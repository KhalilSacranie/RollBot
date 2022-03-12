const sheetModel = require('../models/sheetSchema');

module.exports = {
    name: 'spells',
    description: 'Displays the available spells.',
    usage: '!spells',
    permissions: ['None'],
    async execute(date, message, args, client) {
        try {
            statSheet = await sheetModel.findOne({ sheetID: 'spellSheet' });
            if (!statSheet) return message.reply('No spell-sheet was found. Contact a DM to create one.');

            message.channel.send(statSheet.link);

        } catch (err) {
            console.error(err);
        }
    }
}
