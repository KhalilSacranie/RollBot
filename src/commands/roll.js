const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'roll',
    description: 'Rolls a specified number of dice a certain number of times.',
    execute(date, message, args, client) {
        function GetRandom(max) {
            return Math.floor(Math.random() * (max)) + 1;
        }

        const noDice = args[0];
        const faces = args[1];

        if (!faces) return message.reply("Please include the number of dice and the number of faces.");
        if (noDice > 20) return message.reply("You can not roll more than 20 dice at a single time.");

        for (let i = 0; i < noDice; i++) {
            const answer = String(GetRandom(faces));

            const Embed = new MessageEmbed()
                .setColor(message.member.displayHexColor)
                .setTitle('Number:')
                .setDescription(answer)
                .setTimestamp()

            message.channel.send({ embeds: [Embed] });
        }
    }
}
