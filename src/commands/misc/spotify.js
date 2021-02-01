module.exports = {
    run(message, args, client, lang) {
        const Humanize = require('humanize-duration');
        // Para el tiempo
        const usuario = message.mentions.members.first() || message.member;
        // Usuario
        const spotify = usuario.presence.activities.find((data) => data.name === 'Spotify');
        // Buscamos si en su presencia esta Spotify
        if (!spotify) return message.channel.send(`**\`${usuario.user.tag}\`** ${lang.NotOnSpotify}`);

        // Datazos

        let DuracionTotal = spotify.timestamps.end - spotify.timestamps.start;
        let TiempoRestante = spotify.timestamps.end - Date.now(); 

        //...
        const embed = new (require('discord.js')).MessageEmbed()
        .setAuthor(spotify.details, 'https://media.discordapp.net/attachments/770454173467672578/777635583064277042/Spotify.png')
        .addField(lang.Album, spotify.assets.largeText)
        .addField(lang.Artista, spotify.state)
        .addField(lang.Duracion, Tiempo(Math.floor(new Date(spotify.timestamps.end).getTime() - new Date(spotify.timestamps.start).getTime())))
        .setThumbnail(spotify.assets.largeImageURL({ size: 4096, format: 'png' }))
        .setFooter(`${lang.Tiempo_Restante}: ${Tiempo(Date.now() - new Date(spotify.timestamps.end).getTime())} (${Math.abs(Math.floor(100 * TiempoRestante / DuracionTotal))}%)`)
        .setColor('22C65E'); 
        message.channel.send(embed);

        // Función para sacar el tiempo mas facil
        function Tiempo(date) {
            return Humanize(date, { language: 'es', serialComma: false, conjunction: ' y ', round: true });
        };
    },
    name: 'spotify',
    aliases: ['sp'],
    category: 'misc'
};