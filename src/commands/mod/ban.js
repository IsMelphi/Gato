module.exports = {
    run(message, args, client, lang) {
        const usuario = message.mentions.members.first();
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(lang.NoPermsBan);
        } else if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(lang.NoBotPermsBan)
        } else if(!usuario) {
            return message.channel.send(lang.NoMenc);
        } else if(!usuario.bannable) {
            return message.channel.send(lang.NoBan);
        } else {
            usuario.ban();
            return message.channel.send(lang.Ban);
        };
    },
    name: 'ban',
    aliases: [],
    category: 'mod'
};