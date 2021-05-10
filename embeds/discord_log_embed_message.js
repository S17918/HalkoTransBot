const Discord = require('discord.js')
module.exports = (client) => {

    const channelId = '784175500070617108'

    client.on('guildMemberAdd', (member) => {
        
        let date = parseInt((Date.now() - member.user.createdAt)/ 1000 / 60 / 60 / 24)

        let embed = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle(`User Joined`)
                .setThumbnail(`${member.user.displayAvatarURL()}`)
                .setDescription(`Login: <@${member.id}>\nID: ${member.id}`)
                .addField('Account Age', `${date} days`)
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

        var role= member.guild.roles.cache.find(role => role.name === "NEW");
        member.roles.add(role);

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(embed)
    })

    client.on('guildMemberRemove', (member) => {

        let embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`User Left`)
                .setThumbnail(`${member.user.displayAvatarURL()}`)
                .setDescription(`Login: <@${member.id}>\nID: ${member.id}`)
                .addField("Roles", member.roles.cache.map(r => `<@&${r.id}>`).slice(0,-1).join('\n'))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(embed)
    })
}