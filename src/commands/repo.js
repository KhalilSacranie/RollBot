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
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()

            message.channel.send({ embeds: [Embed] });

        } catch (err) {
            console.error(err);
        }
    }
}
