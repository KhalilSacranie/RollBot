module.exports = async (client, date) => {
    await console.log('\x1b[36m%s\x1b[0m', `${client.user.tag} is now ready ...`);
    await client.channels.cache.get('929529731194450021').send(`\`\`\`${client.user.tag} is now ready ...\n${date}\`\`\``);
}