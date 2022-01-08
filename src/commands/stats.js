require('dotenv').config({ path: '.env' });
const ownerID = process.env.OWNERID;

const sheetsModel = require('../models/sheetsSchema');

module.exports = {
    name: 'stats',
    async execute(message, args, client) {
        sheetData = await sheetsModel.findOne({ sheetID: 'statSheet' });

        try {
            if (args[0] === 'update') {
                if (message.author.id === '460200007522320394' || message.author.id === '543084123460337675') {
                    var newLink = args[1];

                    if (!args[1]) return message.reply('Please enter the new statsheet\'s https.');

                    if (!sheetData) {
                        let sheet = await sheetsModel.create({
                            sheetID : 'statSheet',
                            link : newLink,
                        });
                        await sheet.save();

                        message.reply(`The new stat sheet is ${sheet.link}`);
                        console.log(`${message.author.username} update the stats to ${sheet.link}.`);

                    } else {
                        let sheet = await sheetsModel.findOneAndUpdate({sheetID: 'statSheet'}, {link: newLink});
                        await sheet.save();

                        message.reply(`The new stat sheet is ${newLink}`);
                        console.log(`${message.author.username} update the stats to ${newLink}.`);

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
