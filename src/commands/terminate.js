module.exports = {
    name: 'terminate',
    execute(message, args) {
        if (message.author.id === '543084123460337675') {
            await message.channel.send('Byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            process.exit(1);

        } else {
            message.reply('hehe nice try');
        }
    }
}