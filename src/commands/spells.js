const fs = require('fs');

module.exports = {
    name: 'spells',
    execute(message, args, client) {

        const accessid = ['543084123460337675', '460200007522320394'];

        if (args[0] === 'update') {
            if (message.author.id === '543084123460337675') {
                if(!args[1]) {
                    message.reply('Please enter the link for the new spell sheet.');

                } else {
                    const link = args[1];
                    const newSpellSheet = {
                        name: 'spellSheet',
                        content: link,
                    };

                    fs.writeFile('src/data/spellSheet.json', JSON.stringify(newSpellSheet), err => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('New spell sheet successfully saved!')
                        }
                    });
                }

            } else {
                message.reply('You do not have permission to do that!');
                return;
            }

        } else {
            fs.readFile('src/data/spellSheet.json', 'utf-8', (err, jsonString) => {
                if (err) {
                    console.log(err);

                } else {
                    try {
                        const spellSheet = JSON.parse(jsonString);
                        message.channel.send(spellSheet);
                    } catch (err) {
                        console.log(err);
                    }
                }
            });
        }

    }
}
