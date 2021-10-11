module.exports = {
    name: 'stats',
    execute(message, args, client) {
        const sheet = {statsheet: "https://cdn.discordapp.com/attachments/881247911340568627/896481905334190080/unknown.png"};
        const ppl = ['460200007522320394']

        if (args [0] === 'update') {
            
            // if (!message.author.id === ['460200007522320394', '543084123460337675']) {
            //     message.reply('You do not have permission to do that.');
            //     return;

            // } else if (message.author.id === ['460200007522320394', '543084123460337675']) {

            //     if (!args[1]) {
            //         message.reply('Please enter the new statsheet link.');
            //         return;
                
            //     } else if (args[1]) {
            //         newstatsheet = args[1];
            //         console.log(newstatsheet);
            //         sheet.statsheet = newstatsheet;
            //     }
            // }

            if(message.author.id === ppl) {
                message.channel.send('yes')

            } else {
                message.channel.send('no')
            }

        } else if (!args[0]) {
            message.channel.send(sheet.statsheet);

        }
    }
}

const fs = require('fs');

module.exports = {
    name: 'stats',
    execute(message, args, client) {
        const accessid = [];

        if (args[1] === 'update') {
            return;

        } else {
            fs.readFile('src/data/statSheet.json', 'utf-8', (err, jsonString) => {
                if (err) {
                    console.log(err);

                } else {
                    try {
                        const data = JSON.parse(jsonString);
                        message.channel.send(data)

                    } catch (err) {
                        console.log(err)
                    }
                }
            });
        }

    }
}