const { MessageEmbed } = require('discord.js');

const loreModel = require('../models/loreSchema');

module.exports = {
    name: 'lore',
    async execute(message, args, client) {
        
        if (message.mentions.users.first()) {
            var request = message.mentions.users.first().id;

            try {
                loreData = await loreModel.findOne({ userID: request });

                if (!loreData) {
                    message.reply('The requested lore does not exist.');

                } else {
                    const loreEmbed = new MessageEmbed()
                        .setColor(message.member.displayHexColor)
                        .setTitle(loreData.userName)
                        .setThumbnail(loreData.pfp)
                        .setDescription(loreData.lore)
                        .setTimestamp()

                    message.channel.send({ embeds: [loreEmbed] })
                }

            } catch (err) {
                console.error(err);
            }

        } else {
            var request = message.author.id;

            try {
                loreData = await loreModel.findOne({ userID: request });

                if (!loreData) {
                    message.reply('The requested lore does not exist.');

                } else {
                    const loreEmbed = new MessageEmbed()
                        .setColor(message.member.displayHexColor)
                        .setTitle(loreData.userName)
                        .setThumbnail(loreData.pfp)
                        .setDescription(loreData.lore)
                        .setTimestamp()

                    message.channel.send({ embeds: [loreEmbed] })
                }

            } catch (err) {
                console.error(err);
            }
        }
    }
}