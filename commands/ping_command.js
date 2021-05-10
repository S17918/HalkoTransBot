const Discord = require('discord.js')

module.exports = (client, message_) => {
    message_.delete({timeout: 100})
        let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('Pong! 🏓')
                .setDescription(`Obliczam ping...`)
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

        message_.reply(embed).then((resultMessage) =>{
            const ping = resultMessage.createdTimestamp - message_.createdTimestamp
                message_.channel.messages.fetch().then((messages) => {
                    for(const message of messages){
                        let embed = new Discord.MessageEmbed()
                            .setColor('#00c3ff')
                            .setTitle('Pong! 🏓')
                            .setDescription(`<@${message_.member.id}>\nBot: ${ping} ms\nApi: ${client.ws.ping} ms`)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.displayAvatarURL())
                        message[1].edit(embed).then(msg => {
                            msg.delete({timeout: 15000})
                        })
                        }
                    })
        })
}