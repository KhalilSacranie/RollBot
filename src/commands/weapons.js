require('dotenv').config({ path: '.env' });
const ownerID = process.env.OWNERID;

const sheetsModel = require('../models/sheetsSchema');

module.exports = {
    name: 'weapons',
    async execute(message, args, client) {
        sheetData = await sheetsModel.findOne({ sheetID: 'weaponsSheet' });

        try {
            if (args[0] === 'update') {
                if (message.author.id === (ownerID || '460200007522320394')) {
                    if (args[1]) {
                        var newLink = args[1];
                        sheetData.link = newLink;
                        await sheetData.save();

                        message.reply(`The new stat sheet is ${sheetData.link}`);
                        console.log(`${message.author.username} update the stats to ${sheetData.link}.`);

                    } else {
                        message.reply('Please enter the new statsheet\' https.');
                    }

                } else {
                    message.reply(' You do not have permission to use this command.');
                }

            } else {
                message.channel.send(sheetData.link);
            }
        } catch (err) {
                console.error(err);
        }
    }
}