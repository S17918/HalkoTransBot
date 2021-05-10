const Discord = require('discord.js')
module.exports = (client, message) => {

    message.delete({timeout: 100})
    const name = message.content.replace('!ogłoszenie ', '')

    var currentdate = new Date()
    var dateTime = 'Data: ' + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear()


    let embed = new Discord.MessageEmbed()
        .setColor('#00c3ff')
        .setTitle(`Ogłoszenie`)
        .setDescription(`${dateTime}`)
        .addFields(
            {name: '\u200B', value: `${name}`}
        )
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())

    message.channel.send(embed)

}