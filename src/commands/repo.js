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
                .addField("License", " ")
                .addField("MIT License", " ")
                .addField(" ", " ")
                .addField("Copyright (c) 2022 Khalil Sacranie", " ")
                .addField("", " ")
                .addField("Permission is hereby granted, free of charge, to any person obtaining a copy", " ")
                .addField("of this software and associated documentation files (the \"Software\"), to deal", " ")
                .addField("of this software and associated documentation files (the \"Software\"), to deal", " ")
                .addField("in the Software without restriction, including without limitation the rights", " ")
                .addField("to use, copy, modify, merge, publish, distribute, sublicense, and/or sell", " ")
                .addField("copies of the Software, and to permit persons to whom the Software is", " ")
                .addField("furnished to do so, subject to the following conditions:", " ")
                .addField(" ", " ")
                .addField("The above copyright notice and this permission notice shall be included in all", " ")
                .addField("copies or substantial portions of the Software.", " ")
                .addField(" ", " ")
                .addField("THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR", " ")
                .addField("IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,", " ")
                .addField("FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE", " ")
                .addField("AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER", " ")
                .addField("LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,", " ")
                .addField("OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE", " ")
                .addField("SOFTWARE.", " ")
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
            
            message.channel.send({ embeds: [Embed] });

        } catch (err) {
            console.error(err);
        }
    }
}
