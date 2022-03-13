module.exports = {
    name: 'spells',
    description: 'Displays the available spells.',
    usage: '!spells',
    permissions: ['None'],
    async execute(client, prisma, date, message, args, prefix, ownerID) {
        try {
            let spellSheet = await prisma.sheetmodels.findUnique({
                where: {
                    sheetID: 'spellSheet',
                },
            });

            if (!spellSheet) return message.reply('No spell-sheet was found. Contact a DM to create one.');

            message.channel.send(spellSheet.link);

        } catch (err) {
            console.error(err);
        }
    }
}
