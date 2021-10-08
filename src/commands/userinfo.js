const { MessageEmbed, GuildMember } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    execute(message, args, client) {
        const user = message.mentions.users.first() || message.author;
        const joinDiscord = moment(user.createdAt).format('llll');
        const joinServer = moment(user.joinedAt).format('llll');
        // const roleID = user.roles.highest.id;
        const UserInfoEmbed = new MessageEmbed()
            .setColor(user.displayHexColor)
            .setTitle(user.tag)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: ':id: UserID:', value: user.id },
                { name: ':date: Joined This Guild:', value: joinServer },
                { name: ':date: Joined Discord:', value: joinDiscord },
                { name: ':robot: Bot:', value: String(user.bot) },
                // { name: ':crown: Highest Role:', value: `<@&${roleID}>` },
                { name: 'Nitro:', value: String(user.premiumSince) },
            )
            .setFooter('Created by Khalil Sacranie')
            .setTimestamp()
        message.channel.send({ embeds: [UserInfoEmbed] });
    }
}