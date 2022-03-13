module.exports = {
    name: 'spells_update',
    description: 'Updates the spell-sheet.',
    permissions: ['Admin'],
    async execute(client, prisma, date, message, args, prefix, ownerID) {
        if (message.author.id != '543084123460337675') return message.reply('You don\'t have permission to use this command.');
        if (!args[0]) return message.reply('Please enter a new link');

        const newLink = args[0];

        try {
            let spellSheet = await prisma.sheetmodels.findUnique({
                where: {
                    sheetID: 'spellSheet',
                },
            });

            if (!spellSheet) {
                spellSheet = await prisma.sheetmodels.create({
                    data: {
                        sheetID: 'spellSheet',
                        link: newLink,
                    },
                });

            } else {
                spellSheet = await prisma.sheetmodels.update({
                    where: {
                        sheetID: 'spellSheet',
                    },
                    data: {
                        link: newLink,
                    },
                });
            }

            await client.channels.cache.get('929529731194450021').send(`\`\`\`${message.author.id} updated the spell-sheet to \`${newLink}\`\n${date}\`\`\``);
            console.log('The new spell-sheet is ' + newLink);
            message.reply('The new spell-sheet is ' + newLink);

        } catch (err) {
            console.error(err);
        }
    }
}
