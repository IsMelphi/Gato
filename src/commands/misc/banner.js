module.exports = {
    run(message, args, client, lang) {
        if (message.guild.banner) {
            return message.channel.send(new (require('discord.js')).MessageEmbed().setTitle(`Banner de ${message.guild.name}`).addField('Imagen completa', `[click aquí](${message.guild.bannerURL({ size: 4096, dynamic: true, format: 'png' })})`).setImage(message.guild.bannerURL({ size: 4096, dynamic: true, format: 'png' })));
        } else {
            return message.channel.send(lang.NoBanner);
        }
    },
    name: 'banner',
    aliases: [],
    category: 'misc'
};