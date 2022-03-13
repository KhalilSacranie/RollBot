module.exports = {
    name: 'stats_update',
    description: 'Updates the stat-sheet.',
    permissions: ['Admin'],
    async execute(client, prisma, date, message, args, prefix, ownerID) {
        if (message.author.id != '543084123460337675') return message.reply('You don\'t have permission to use this command.');
        if (!args[0]) return message.reply('Please enter a new link');

        const newLink = args[0];

        try {
            let statSheet = await prisma.sheetmodels.findUnique({
                where: {
                    sheetID: 'statSheet',
                },
            });

            if (!statSheet) {
                statSheet = await prisma.sheetmodels.create({
                    data: {
                        sheetID: 'statSheet',
                        link: newLink,
                    },
                });

            } else {
                statSheet = await prisma.sheetmodels.update({
                    where: {
                        sheetID: 'statSheet',
                    },
                    data: {
                        link: newLink,
                    },
                });
            }

            await client.channels.cache.get('929529731194450021').send(`\`\`\`${message.author.id} updated the stat-sheet to \`${newLink}\`\n${date}\`\`\``);
            console.log('The new stat-sheet is ' + newLink);
            message.reply('The new stat-sheet is ' + newLink);

        } catch (err) {
            console.error(err);
        }
    }
}
