const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'repo',
    description: 'A link to the repo.',
    async execute(date, message, args, client) {
        try {
            Embed = new MessageEmbed()
                .setTitle('RollBot\'s Github Repo')
                .setColor(message.guild.me.displayHexColor)
                .setDescription("https://github.com/KhalilSacranie/RollBot")
                .addField("License", "\u200b")
                .addField("MIT License", "\u200b")
                .addField("\u200b", "\u200b")
                .addField("Copyright (c) 2022 Khalil Sacranie", "\u200b")
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()

            message.channel.send({ embeds: [Embed] });

        } catch (err) {
            console.error(err);
        }
    }
}
