const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'roll',
    execute(message, args) {
        function getRandomIntInclusive(min, max) {
            min = Math.min(min, max);
            max = Math.max(max, min);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        let num1 = args[0];
        let num2 = args[1];
        if(!num1) return message.reply("Please enter a first number");
        if(!num2) return message.reply("Please enter a second number");

        const answer = String(getRandomIntInclusive(num1, num2))

        const Embed = new MessageEmbed()
	        .setColor(message.member.displayHexColor)
	        .setTitle('Number:')
	        .setDescription(answer)
	        .setTimestamp()

        message.channel.send({ embeds: [Embed] });
        console.log(String(message.author.tag) + ' rolled a ' + answer)
    }
}