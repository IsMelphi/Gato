require('dotenv').config();
const { Client, Collection } = require('discord.js');
const client = new Client();

const map = new Map();

client.commands = new Collection();
client.lang = (message, idioma) => { return map.set(message.guild.id, idioma) };

const Handler = () => {
    return require('fs').readdirSync('./src/commands').filter((file) => {
        return require('fs').statSync(`./src/commands/${file}`).isDirectory();
    });
};

const ArrayComandos = require('fs').readdirSync('./src/commands').filter((file) => file.endsWith('.js'));

for (carpeta of Handler()) {
    subcarpeta = require('fs').readdirSync(`./src/commands/${carpeta}`);
    for (archivo of subcarpeta) {
        ArrayComandos.push([carpeta, archivo]);
    };
};

for (archivo of ArrayComandos) {
    if (Array.isArray(archivo)) cmd = require(`./src/commands/${archivo[0]}/${archivo[1]}`);
    else cmd = require(`./src/commands/${archivo}`);
    client.commands.set(cmd.name, cmd);
};  

client.on('ready', () => {
    console.log('Estoy listo');
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith('x/')) return;

    const args = message.content.slice('x/'.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    const command = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
    if (!command) return;

    try {
        command.run(message, args, client, lang(map.get(message.guild.id) ? map.get(message.guild.id) : 'es'));
    } catch (error) {
        console.error(error);
    };

}); 

client.login(process.env.DISCORD_TOKEN);

function lang(idioma) {
    if (idioma === 'es') {
        return require('./src/lang/es');
    } else if (idioma === 'en') {
        return require('./src/lang/en');
    } else {
        return require('./src/lang/es');
    };
};