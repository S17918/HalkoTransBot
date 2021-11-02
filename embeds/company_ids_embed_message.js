const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784773155574644746'

    const channel = await client.channels.fetch(channelId)

    const HalkoTrans = '784178682998030396'
    const gtw = '785241282452258867'
    const capricorns = '785253209664389120'
    const szachmat = '881622054443565057'
    const novaspedition = '881624846331707492'
    const roszadatrans = '887422385618317413'
    const liderLogistic = '905197280456482898'
    const etc = '905198464101658634'
    const sharkyTrans = '905199252534333450'
    const euroSpeed = '905199236864413766'
    const darkom = '905200435378401300'
    const mms = '905200876967325768'
    const bts = '905202106108096612'
    const sngTransportLogistics = '905201356728598538'
    const polishTransLogistic = '892111606614470677'

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('**Lista ID firm**')
                .addFields(
                    {name: `HalkoTrans Logistics`, value: `${HalkoTrans}`},
                    {name: `GTW Logistic`, value: `${gtw}`},
                    {name: `Capricorns`, value: `${capricorns}`},
                    {name: `SzachMat`, value: `${szachmat}`},
                    {name: `Nova Spedition`, value: `${novaspedition}`},
                    {name: `Roszada Trans`, value: `${roszadatrans}`},
                    {name: `Lider-Logistic`, value: `${liderLogistic}`},
                    {name: `E.T.C`, value: `${etc}`},
                    {name: `Sharky Trans`, value: `${sharkyTrans}`},
                    {name: `Euro Speed`, value: `${euroSpeed}`},
                    {name: `Darkom`, value: `${darkom}`},
                    {name: `MMS`, value: `${mms}`},
                    {name: `Blue-Trans Spedition`, value: `${bts}`},
                    {name: `SNG Transport & Logistics`, value: `${sngTransportLogistics}`},
                    {name: `Polish Trans-Logistic`, value: `${polishTransLogistic}`},
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
                        {name: `Nova Spedition`, value: `${novaspedition}`},
                        {name: `Roszada Trans`, value: `${roszadatrans}`},
                    )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}