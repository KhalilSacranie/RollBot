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
                .addField("\u200b", "\u200b")
                .addField("Permission is hereby granted, free of charge, to any person obtaining a copy", "\u200b")
                .addField("of this software and associated documentation files (the \"Software\"), to deal", "\u200b")
                .addField("in the Software without restriction, including without limitation the rights", "\u200b")
                .addField("to use, copy, modify, merge, publish, distribute, sublicense, and/or sell", "\u200b")
                .addField("copies of the Software, and to permit persons to whom the Software is", "\u200b")
                .addField("furnished to do so, subject to the following conditions:", "\u200b")
                .addField("\u200b", "\u200b")
                .addField("The above copyright notice and this permission notice shall be included in all", "\u200b")
                .addField("copies or substantial portions of the Software.", "\u200b")
                .addField("\u200b", "\u200b")
                .addField("THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR", "\u200b")
                .addField("IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,", "\u200b")
                .addField("FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE", "\u200b")
                .addField("AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER", "\u200b")
                .addField("LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,", "\u200b")
                .addField("OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE", "\u200b")
                .addField("SOFTWARE.", "\u200b")
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()

            message.channel.send({ embeds: [Embed] });

        } catch (err) {
            console.error(err);
        }
    }
}
