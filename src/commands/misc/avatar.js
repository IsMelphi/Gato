module.exports = {
    run(message, args, client, lang) {
        const usuario = require('../../utils/util').Usuario(message, args);
        const embed = new (require('discord.js')).MessageEmbed()
        .setFooter(`Avatar de ${usuario.user.tag}`)
        .setDescription(`[Link Avatar](${usuario.user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })})`)
        .setImage(usuario.user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' }))
        .setColor('RANDOM');
        message.channel.send(embed);
    }, 
    name: 'avatar',
    aliases: ['av', 'pf'],
    category: 'misc'
};