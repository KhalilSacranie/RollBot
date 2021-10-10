// module.exports = {
//     name: 'stats',
//     execute(message, args, client) {
//         const jsonObj = {Id: '1', Link: "https://cdn.discordapp.com/attachments/895699041030119565/896105984102121523/Black.png"};
//         const currentstatsheet = jsonObj.Link;

//         if (args[0] === 'update') {

//             if (!message.author.id === ['460200007522320394', '543084123460337675']) {
//                 message.reply('You do not have permission to do that.');

//             } else {
//                 if (!args[1]){
//                     message.reply('Please enter a link to the new statsheet');
//                 } else if (args[1]) {
//                     const newstatsheet = args[1];

//                     message.reply(newstatsheet)


//             }

//         } else if (!args[0]) {
//             message.channel.send(currentstatsheet);
//         }
//     }
// }
// }

module.exports = {
    name: 'stats',
    execute(message, args, client) {
        const sheet = {statsheet: "https://cdn.discordapp.com/attachments/895699041030119565/896105984102121523/Black.png"};
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