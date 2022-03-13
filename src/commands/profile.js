const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'profile',
    description: 'Displays player specific stats',
    aliases: ['me', 'p'],
    async execute(date, message, args, client) {
        // const canvas = createCanvas(1055, 1174);
        // const context = canvas.getContext('2d');

        // const background = await loadImage('./profile.png');
        // context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // const avatar = await loadImage(message.member.displayAvatarURL({ format: 'jpg' }));
        // context.drawImage(avatar, 726, 0, 329, 368);

        // const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
        // message.channel.send({ files: [attachment] });

        const profile = `
\`\`\`${message.member.displayName}
Class: ${1}\`\`\`
        `

        message.channel.send(profile)        
    }
}
