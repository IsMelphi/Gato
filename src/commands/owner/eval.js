module.exports = {
    async run(message, args, client, lang) {
        if (message.author.id != '534951970310586378') return;
        if (!args[0]) return;

        try {
            let Evaluacion = await eval(args.join(' '));
            let Tipo = typeof Evaluacion;

            if (typeof Evaluacion != 'string') Evaluacion = require('util').inspect(Evaluacion, { depth: 0});

            message.channel.send(`(${Tipo.substring(0, 1).toUpperCase()}${Tipo.substring(1)}) ${Evaluacion}`, { code: 'js', split: { char: '', maxLength: 1900 }});

        } catch (error) {
            message.channel.send(`${error.name}: ${error.message}`, { code: 'js' });
        };

    },
    name: 'eval',   
    aliases: ['e'],
    category: 'devs'
};