const fs = require('fs');

module.exports = {
    name: 'weapons',
    execute(message, args, client) {

        const accessid = ['543084123460337675', '460200007522320394'];

        if (args[0] === 'update') {
            if (message.author.id === '543084123460337675') {
                if(!args[1]) {
                    message.reply('Please enter the link for the new weapon sheet.');

                } else {
                    const link = args[1];
                    const newWeaponSheet = {
                        name: 'weaponSheet',
                        content: link,
                    };

                    fs.writeFile('src/data/weaponSheet.json', JSON.stringify(newWeaponSheet), err => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('New weapon sheet successfully saved!')
                        }
                    });
                }

            } else {
                message.reply('You do not have permission to do that!');
                return;
            }

        } else {
            fs.readFile('src/data/weaponSheet.json', 'utf-8', (err, jsonString) => {
                if (err) {
                    console.log(err);

                } else {
                    try {
                        const weaponSheet = JSON.parse(jsonString);
                        message.channel.send(weaponSheet);
                    } catch (err) {
                        console.log(err);
                    }
                }
            });
        }

    }
}
