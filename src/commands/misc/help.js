module.exports = {
    run(message, args, client) {
        if (!args[0]) {
            /* Help Normal */    
            return message.channel.send('Help Normal');        
        } else if (args[0] === '-dm') {
            /* Help DM */
            return message.channel.send('Help DM');
        } else if (!client.commands.get(args[0])) {
            /* Comando no existente */
            return message.channel.send('Comando no existe');
        } else {
            /* Información del comando */
            return message.channel.send('Información del comando');
        };
    },
    name: 'help',
    aliases: ['ayuda'],
    category: 'misc'
};