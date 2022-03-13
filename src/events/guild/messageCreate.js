require ('dotenv').config({ path: '.env' });
const prefix = process.env.PREFIX;
const ownerID = process.env.OWNERID;

module.exports = async (client, prisma, date, message) => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return message.reply('Command was not found');

    if (command) command.execute(client, prisma, date, message, args, prefix, ownerID);
}