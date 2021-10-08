module.exports = {
    name: 'stats',
    execute(message, args, client) {
        // const {statsheet} = require('./userinfo.js');
        // const sts = statsheet.link
        // console.log(sts);
        let statsheet = 'https://cdn.discordapp.com/attachments/895699041030119565/896105984102121523/Black.png';
        let perms = [460200007522320394, 543084123460337675]
        if (!args[0]) {
            message.channel.send(statsheet);
        } else if (args[0] === 'update') {
            if (!message.author.user.id === perms) {
                if (!args[1]){
                    message.reply('Please enter a link to the new stat sheet');
                } else if (args[1]) {
                    statsheet = args[1]
                    message.send('The new stat sheet' + statsheet);
                }
            } else {
                message.reply('You do not have permission to do that.')
            }
        }
    }
}