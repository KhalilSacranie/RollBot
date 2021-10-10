module.exports = {
    name: 'stats',
    execute(message, args, client) {
        const sheet = {statsheet: "https://cdn.discordapp.com/attachments/881247911340568627/896481905334190080/unknown.png"};
        const currentstatsheet = sheet.statsheet;

        if (args [0] === 'update') {
            
            if (!message.author.id === ['460200007522320394', '543084123460337675']) {
                message.reply('You do not have permission to do that.');
                return;

            } else if (message.author.id === ['460200007522320394', '543084123460337675']) {

                if (!args[1]) {
                    message.reply('Please enter the new statsheet link.');
                    return;
                
                } else if (args[1]) {
                    newstatsheet = args[1];
                    console.log(newstatsheet);
                    sheet.statsheet = newstatsheet;
                }
            }

        } else if (!args[0]) {
            message.channel.send(currentstatsheet);

        }
    }
}