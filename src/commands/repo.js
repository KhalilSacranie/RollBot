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
                .addField("License", `MIT License

                Copyright (c) 2022 Khalil Sacranie
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.`
                )
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
            
            message.channel.send({ embeds: [Embed] });

        } catch (err) {
            console.error(err);
        }
    }
}
