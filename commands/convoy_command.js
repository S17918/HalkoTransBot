const Discord = require('discord.js')

module.exports = async (client, message, convoy_name, date, regroup_time, start_time, distance, begin_city, end_city, server_name, dlcs = [], organizator, mapa) => {
    const name = message.content.replace('!konwój ', '')

    message.guild.channels.create(name, {
        type: 'text',
    }).then(channel =>{
        const categoryId = '784799920603136030'
        const hired = '784170980909252619'
        channel.setParent(categoryId)

        const important = '785550674984960050'
        const channel_important = client.channels.cache.get(important)
        var currentdate = new Date()
        var dateTime = 'Data: ' + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear()


        let embed_important = new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle(`Ogłoszenie`)
            .setDescription(`${dateTime}`)
            .addFields(
                {name: '\u200B', value: `Opublikowano nowy konwój na kanale ${client.channels.cache.get(channel.id).toString()}\nZapraszamy <@&${hired}> do zapisów na to wydarzenie.`}
            )
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
        channel_important.send(embed_important)

        channel.messages.fetch().then((messages) => {
            if(messages.size === 0){

                let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle(`Konwój Firmowy`)
                .setDescription(`${convoy_name}`)
                .addFields(
                    {name: 'Data', value: `${date}`},
                    {name: 'Godzina zbiórki', value: `${regroup_time}`, inline: true},
                    {name: 'Godzina startu', value: `${start_time}`, inline: true},
                    {name: 'Dystans konwoju', value: `${distance}`},
                    {name: 'Miasto startowe', value: `${begin_city}`, inline: true},
                    {name: 'Miasto końcowe', value: `${end_city}`, inline: true},
                    {name: 'Serwer', value: `${server_name}`},
                    {name: 'Wymagane DLC', value: `${dlcs.join('\n')}`},
                    {name: 'Organizator', value: `${organizator}`},
                    {name: '\u200B', value: `**Mapa**`},
                )
                .setImage(`${mapa}`)
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

                channel.send(embed)
            }else{
                
            }
        })
    })
}