module.exports = {
    name: 'stats',
    description: 'Displays the current stat-sheet.',
    usage: '!stats',
    permissions: ['None'],
    async execute(client, prisma, date, message, args, prefix, ownerID) {
        try {
            let statSheet = await prisma.sheetmodels.findUnique({
                where: {
                    sheetID: 'statSheet',
                },
            });

            if (!statSheet) return message.reply('No stat-sheet was found. Contact a DM to create one.');

            message.channel.send(statSheet.link);

        } catch (err) {
            console.error(err);
        }
    }
}
