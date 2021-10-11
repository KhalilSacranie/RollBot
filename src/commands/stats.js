const fs = require('fs');

module.exports = {
    name: 'stats',
    execute(message, args, client) {

        const accessid = ['543084123460337675', '460200007522320394'];

        if (args[0] === 'update') {
            if (message.author.id === '543084123460337675') {
                if(!args[1]) {
                    message.reply('Please enter the link for the new stat sheet.');

                } else {
                    const link = args[1];
                    const newStatSheet = {
                        name: 'statSheet',
                        content: link,
                    };

                    fs.writeFile('src/data/statSheet.json', JSON.stringify(newStatSheet), err => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('New stat sheet successfully saved!')
                        }
                    });
                }

            } else {
                message.reply('You do not have permission to do that!');
                return;
            }

        } else {
            fs.readFile('src/data/statSheet.json', 'utf-8', (err, jsonString) => {
                if (err) {
                    console.log(err);

                } else {
                    try {
                        const statSheet = JSON.parse(jsonString);
                        message.channel.send(statSheet);
                    } catch (err) {
                        console.log(err);
                    }
                }
            });
        }

    }
}
