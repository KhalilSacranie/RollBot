const loreModel = require('../models/loreSchema');

module.exports = {
    name: 'createlore',
    async execute(message, args, client) {

        if (message.mentions.users.first() && args[1]) {
            const userID = message.mentions.users.first().id;
            const userName = message.mentions.users.first().username;
            const alore = new String(args.slice(1).join(' '));

            if (alore.length < 1500) {
                let loreData;
                try {
                    loreData = await loreModel.findOne({ userID: userID });
                    if (!loreData) {
                        let lore = await loreModel.create({
                            userID: userID,
                            userName: userName,
                            lore: alore,
                            pfp: message.mentions.users.first().avatarURL(),
                        });
                        lore.save();

                        console.log(`${message.author.username} created lore for ${userName}.`);
                        message.reply(`${userName}'s lore is now \n\`\`\`${alore}\`\`\``);

                    } else {
                        message.reply('Lore for this user already exists. Only they can remove it.')
                    }

                } catch (err) {
                    console.error(err)
                }

            } else {
                message.reply('Please shorten this lore.')
            }

        } else {
            message.reply('Please tag the owner of this lore and the lore contents.')
        }
    }
}
