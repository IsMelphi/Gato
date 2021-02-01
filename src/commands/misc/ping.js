module.exports = {
    run(message, args, client, lang) {
        message.channel.send(`[📨] Ping Mensaje: **${Math.abs(Date.now() - message.createdTimestamp)}**ms\n[📡] DiscordAPI: **${client.ws.ping}**ms`);
    },
    name: 'ping',
    aliases: [],
    category: 'misc'
};