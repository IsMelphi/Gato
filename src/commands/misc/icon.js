module.exports = {
    run(message, args, client, lang) {
        if (message.guild.icon === null) {
            return message.channel.send(lang.NotIcon);
        } else {
            message.channel.send({ files: [message.guild.iconURL({ size: 4096, dynamic: true, format: 'png' })] });
        }
    },
    name: 'icon',
    aliases: [],
    category: 'misc'
};