const Discord = require('discord.js')
const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if(reactions.length > 0){
        setTimeout(() => addReactions(message, reactions), 750)
    }
}

module.exports = async (client, id, text, title, reactions = []) => {
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle(title)
                .setDescription(text)
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed).then((message) =>{
                    addReactions(message, reactions)
            })
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle(title)
                    .setDescription(text)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
                addReactions(message[1], reactions)
            }
        }
    })
}