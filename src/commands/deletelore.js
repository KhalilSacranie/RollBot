const loreModel = require('../models/loreSchema');

module.exports = {
    name: 'deletelore',
    async execute(message, args, client) {
        let loreData;
        try {
            loreData = await loreModel.findOne({ userID: message.author.id });
            if (!loreData) {
                message.reply('No lore exists for you.');

            } else {
                loreData.deleteOne({ userID: message.author.id }, function (err) {
                    if(err) console.log(err);
                    console.log(`${message.author.username} deleted their lore.`);
                });

            }

        } catch (err) {
            console.error(err);
        }

    }
}
