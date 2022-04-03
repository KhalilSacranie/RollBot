const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'profile',
    description: 'Displays player specific stats',
    async execute(client, prisma, date, message, args, prefix, ownerID) {
        // const canvas = createCanvas(1055, 1174);
        // const context = canvas.getContext('2d');

        // const background = await loadImage('./profile.png');
        // context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // const avatar = await loadImage(message.member.displayAvatarURL({ format: 'jpg' }));
        // context.drawImage(avatar, 726, 0, 329, 368);

        // const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
        // message.channel.send({ files: [attachment] });

        message.channel.send(profile)        
    }
}
