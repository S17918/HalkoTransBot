const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784773155574644746'

    const channel = await client.channels.fetch(channelId)

    const HalkoTrans = '784178682998030396'
    const tiktak = '785240835133407242'
    const gtw = '785241282452258867'
    const skopelos = '785242572787941397'
    const capricorns = '785253209664389120'
    const panda = '785255460940021771'
    const support = '786331749264392224'

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
                    {name: `Skopelos Transport`, value: `${skopelos}`},
                    {name: `Capricorns`, value: `${capricorns}`},
                    {name: `Panda Spedition`, value: `${panda}`},
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
                        {name: `Skopelos Transport`, value: `${skopelos}`},
                        {name: `Capricorns`, value: `${capricorns}`},
                        {name: `Panda Spedition`, value: `${panda}`},
                        {name: `Support VIP`, value: `${support}`},
                    )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}