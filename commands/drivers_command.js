const Discord = require('discord.js')
const fs = require('fs')
const axios = require('axios')

module.exports = (client, message_) => {
    message_.delete({timeout: 100})
    axios.get('https://api.truckersmp.com/v2/vtc/86/members')
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
                .setTitle('Kierowcy zatrudnieni w HalkoTrans Logistics')
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

            for(i of json.response.members){
                let username = i.username
                let rank = i.role
                let date = i.joinDate
                embed.addField(username,rank + " \n " + date)
            }

            message_.reply(embed)
    },500)
}

