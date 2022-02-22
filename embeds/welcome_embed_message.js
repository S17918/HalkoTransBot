const Discord = require('discord.js')
module.exports = (client) => {

    const channelId = '784168371649380404'
    const targetId_role = '784174904999542874'
    const targetId_discord = '784174936717262868'

    client.on('guildMemberAdd', (member) => {
        
        let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle(`Witamy na serwerze HalkoTrans Logistics`)
                .setDescription(`Witaj <@${member.id}>!\nAby zdobyć odpowiednie rangi i odblokować kanały ogólne wejdź na ${member.guild.channels.cache.get(targetId_role).toString()} i nadaj sobie odpowiednie role.\nProsimy również o zapoznanie się z regulaminem ${member.guild.channels.cache.get(targetId_discord).toString()}`)
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(embed)

        client.users.fetch('555858068580335627').then(user => {

            let embed_new_person = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('Nowy użytkownik')
                .setDescription(`Użytkownik <@${member.id}> dołączył do serwera HalkoTrans Logistics!`)
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

            user.send(embed_new_person)
        })

        let private_welcome_message = new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Witaj na serwerze firmy HalkoTrans Logistics')
            .setThumbnail('https://cdn.discordapp.com/attachments/555861264874733608/783082306591129651/halko.png')
            .setDescription(`Aktualnie znajdujesz się w poczekalni bez dostępu do kanałów głosowych i tekstowych.\n\nAby otrzymać dostęp do naszego serwera musisz określić cel wizyty wybierając odpowiednią rolę na kanale **#role**\n[*Należy dodać reakcję pod wiadomością*]\n\n\n**Rekrutacja**\nOtrzymasz rolę kandydata oraz dostęp do regulaminu i kanałów rekrutacji\n\n**Współpraca**\nOtrzymasz rolę przedstawiciela oraz dostęp do kanałów współpracy\n\n**Gość**\nOtrzymasz rangę gościa oraz dostęp do kanałów ogólnych\n\n\nDodatkowo wedle uznania możesz sobie dodać inne interesujące cię rangi.\nJeżeli masz jakieś pytania śmiało pisz na kanale **#generalny**\n\nPozdrawiamy i życzymy szerokiej drogi\n***Firma HalkoTrans Logistics***`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

        member.send(private_welcome_message)

    })
}