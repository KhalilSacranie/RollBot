const fs = require('fs');

module.exports = async (client, prisma) => {
    const ts = new Date();
    const date = `${ts.getFullYear()}:${ts.getMonth()}:${ts.getDate()}:${ts.getHours()}:${ts.getMinutes()}:${ts.getSeconds()}`;
    
    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`src/events/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of event_files) {
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, client, prisma, date));
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}
