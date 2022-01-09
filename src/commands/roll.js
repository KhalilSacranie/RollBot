const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'roll',
    execute(date, message, args, client) {
        function getRandomIntInclusive(max) {
            return Math.floor(Math.random() * (max)) + 1;
        }

        var a = new Array(args[0]);
        for (var i = 0; i < args[0]; i++) {
            a[i] = i + 1;
        }
        for (var i = 0; i < a.length; i++) {
            let num1 = args[1];
            if (!num1) return message.reply("Please enter how many faces the dice will have.");

            const answer = String(getRandomIntInclusive(num1));

            const Embed = new MessageEmbed()
                .setColor(message.member.displayHexColor)
                .setTitle('Number:')
                .setDescription(answer)
                .setTimestamp()

            message.channel.send({ embeds: [Embed] });
        }
    }
}
