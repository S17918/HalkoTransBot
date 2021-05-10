const Discord = require('discord.js')
const fs = require('fs')
const axios = require('axios')

module.exports = (client, message_) => {
    message_.delete({timeout: 100})
    axios.get('https://api.truckersmp.com/v2/servers')
        .then((res) => {
            if(res.data){
                data = JSON.stringify(res.data)
            }else{
                console.log("Nie udało się pobrać danych API z serwera")
            }
        })
        .catch((err) => {
            console.log("Wystąpił błąd: ", err)
        })

    setTimeout(function(){
            json = JSON.parse(data)

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('Status serwerów TruckersMP')
                .addFields(
                    {name: "\u200B", value: "\u2800".repeat(52)+`<:ets2:784169027568140289> Euro Truck Simulator 2`},
                    {name: `${json.response[0].name}`, value: `${json.response[0].players} / ${json.response[0].maxplayers}`, inline: true},
                    {name: `${json.response[1].name}`, value: `${json.response[1].players} / ${json.response[1].maxplayers}`, inline: true},
                    {name: `${json.response[2].name}`, value: `${json.response[2].players} / ${json.response[2].maxplayers}`, inline: true},
                    {name: `${json.response[3].name}`, value: `${json.response[3].players} / ${json.response[3].maxplayers}`, inline: true},
                    {name: `${json.response[4].name}`, value: `${json.response[4].players} / ${json.response[4].maxplayers}`, inline: true},
                    {name: `${json.response[5].name}`, value: `${json.response[5].players} / ${json.response[5].maxplayers}`, inline: true},
                    {name: `${json.response[6].name}`, value: `${json.response[6].players} / ${json.response[6].maxplayers}`, inline: true},
                    {name: `${json.response[7].name}`, value: `${json.response[7].players} / ${json.response[7].maxplayers}`, inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                )
                .addFields(
                    {name: '\u200B', value: '<:ats:784169052536963114> American Truck Simulator'},
                    {name: `${json.response[8].name}`, value: `${json.response[8].players} / ${json.response[8].maxplayers}`, inline: true},
                    {name: `${json.response[9].name}`, value: `${json.response[9].players} / ${json.response[9].maxplayers}`, inline: true},
                    {name: `${json.response[10].name}`, value: `${json.response[10].players} / ${json.response[10].maxplayers}`, inline: true},
                    {name: `\u200B`, value: `\u200B`},
                )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

            message_.reply(embed)
    },500)
}

