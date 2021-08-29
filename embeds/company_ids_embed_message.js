const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784773155574644746'

    const channel = await client.channels.fetch(channelId)

    const HalkoTrans = '784178682998030396'
    const tiktak = '785240835133407242'
    const gtw = '785241282452258867'
    const capricorns = '785253209664389120'
    const szachmat = '881622054443565057'

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('**Lista ID firm**')
                .addFields(
                    {name: `HalkoTrans Logistics`, value: `${HalkoTrans}`},
                    {name: `TicTac Logistics`, value: `${tiktak}`},
                    {name: `GTW Logistic`, value: `${gtw}`},
                    {name: `Capricorns`, value: `${capricorns}`},
                    {name: `SzachMat`, value: `${szachmat}`},
                )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed)
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('HalkoTrans Logistics')
                    .setDescription('**Lista ID firm**')
                    .addFields(
                        {name: `HalkoTrans Logistics`, value: `${HalkoTrans}`},
                        {name: `TicTac Logistics`, value: `${tiktak}`},
                        {name: `GTW Logistic`, value: `${gtw}`},
                        {name: `Capricorns`, value: `${capricorns}`},
                        {name: `SzachMat`, value: `${szachmat}`},
                    )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}