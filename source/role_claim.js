const Discord = require('discord.js')
const embedMessage = require('../embeds/roles_embed_message')

module.exports = client => {
    const channelID = '784174904999542874'

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)
    const emojis = {
        Recruit: "KANDYDAT",
        Cowork: "PRZEDSTAWICIEL FIRMY",
        BlobPepe: "GOŚĆ",
        ets2: "Euro Truck Simulator 2",
        ats: "American Truck Simulator",
        GoingEast: "GOING EAST",
        Scandinavia: "SCANDINAVIA",
        ViveLaFrance: "VIVE LA FRANCE",
        Italia: "ITALIA",
        BalticSea: "BEYOND THE BALTIC SEA",
        BlackSea: "ROAD TO THE BLACK SEA",
        Iberia: "IBERIA",
        ProMods: "ProMods",
        Mouse: "MYSZKA",
        Keyboard: "KLAWIATURA",
        SteeringWheel: "KIEROWNICA",
        Pad: "PAD",
        Twitch: "Twitch",
        YouTube: "YouTube"
    }

    const names = ['Rekrutacja\n*Dostęp do kanałów rekrutacji*', 'Współpraca\n*Dostęp do kanałów współpracy*', 'Gość\n*Dostęp do kanałów ogólnych*\n\n\n\n**GRY**','Euro Truck Simulator 2', 'American Truck Simulator\n\n\n\n**DODATKI**', 'Going East', 'Scandinavia', 'Vive La France', 'Italia', 'Beyond the Baltic Sea', 'Road to the Black Sea', 'Iberia', 'ProMods\n\n\n\n**KONTROLERY**','Myszka', 'Klawiatura', 'Kierownica', 'Pad\n\n\n\n**STREAMING**','Twitch', 'YouTube\n\n\u200B']

    const reactions = []
    var x = 0

    let Title = 'HalkoTrans Logistics\n'
    let Text = 'Odpowiednie rangi zostaną nadane po dodaniu reakcji pod tą wiadomością\n\n\n**POWÓD WIZYTY**\n\n'
    for (const key in emojis){
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        Text += `${emoji}  -  ${names[x]}\n\n`
        x++;
    }

    embedMessage(client, channelID, Text, Title, reactions)

    const handleReaction = (reaction, user, add, client) => {
        if(user.id === '781188809962422323'){
            return
        }

        const emoji = reaction._emoji.name
        const { guild } = reaction.message
        const roleName = emojis[emoji]
        if(!roleName){
            return
        }

        const role = guild.roles.cache.find(role => role.name === roleName)
        const member = guild.members.cache.find(member => member.id === user.id)
        const role_newbie_remove = member.roles.cache.find(role => role.name === 'NEW')
        const role_newbie_add = member.guild.roles.cache.find(role => role.name === "NEW");


        if(add){
            if(guild.roles.cache.find(role => role.name === 'KANDYDAT') === role || guild.roles.cache.find(role => role.name === 'GOŚĆ') === role || guild.roles.cache.find(role => role.name === 'PRZEDSTAWICIEL FIRMY') === role){
                if(member.roles.cache.some(role => role.name === 'ZATRUDNIONY') === true){
                }else{
                    if(member.roles.cache.some(role => role.name === 'NEW') === true){
                        if(guild.roles.cache.find(role => role.name === 'KANDYDAT') === role){
                            client.users.fetch('555858068580335627').then(user => {

                                let embed_kandydat = new Discord.MessageEmbed()
                                    .setColor('#00c3ff')
                                    .setTitle('Rekrutacja')
                                    .setDescription(`Użytkownik <@${member.id}> wybrał rangę kandydat i czeka na rekrutację!`)
                                    .setTimestamp()
                                    .setFooter(client.user.username, client.user.displayAvatarURL())

                                user.send(embed_kandydat)
                            })
                            member.roles.add(role)
                            member.roles.remove(role_newbie_remove)
                        }else if(guild.roles.cache.find(role => role.name === 'PRZEDSTAWICIEL FIRMY') === role){
                            client.users.fetch('555858068580335627').then(user => {

                                let embed_kandydat = new Discord.MessageEmbed()
                                    .setColor('#00c3ff')
                                    .setTitle('Współpraca')
                                    .setDescription(`Użytkownik <@${member.id}> wybrał rangę współpraca i czeka na kontakt z przedstawicielem naszej firmy!`)
                                    .setTimestamp()
                                    .setFooter(client.user.username, client.user.displayAvatarURL())

                                user.send(embed_kandydat)
                            })
                            member.roles.add(role)
                            member.roles.remove(role_newbie_remove)
                        }
                        member.roles.add(role)
                        member.roles.remove(role_newbie_remove)
                    }else{
                        member.roles.add(role)
                    }
                }
            }else{
                member.roles.add(role)
            }
        }else{
            if(guild.roles.cache.find(role => role.name === 'KANDYDAT') === role || guild.roles.cache.find(role => role.name === 'GOŚĆ') === role || guild.roles.cache.find(role => role.name === 'PRZEDSTAWICIEL FIRMY') === role){
                if(member.roles.cache.some(role => role.name === 'ZATRUDNIONY') === true){
                }else{
                    if(member.roles.cache.some(role => role.name === 'KANDYDAT') === false){
                        if(member.roles.cache.some(role => role.name === 'PRZEDSTAWICIEL FIRMY') === false){
                            if(member.roles.cache.some(role => role.name === 'GOŚĆ') === false){
                                member.roles.add(role_newbie_add)
                            }else{
                                member.roles.add(role_newbie_add)
                                member.roles.remove(role)
                            }
                        }else{
                            if(member.roles.cache.some(role => role.name === 'GOŚĆ') === false){
                                if(member.roles.cache.some(role => role.name === 'KANDYDAT') === false){
                                    member.roles.add(role_newbie_add)
                                    member.roles.remove(role)
                                }else{
                                    member.roles.remove(role)
                                }
                            }else{
                                member.roles.remove(role)
                            }
                        }
                    }else{
                        if(member.roles.cache.some(role => role.name === 'PRZEDSTAWICIEL FIRMY') === false){
                            if(member.roles.cache.some(role => role.name === 'GOŚĆ') === false){
                                member.roles.add(role_newbie_add)
                                member.roles.remove(role)
                            }else{
                                member.roles.remove(role)
                            }
                        }else{
                            member.roles.remove(role)
                        }
                    }
                }
            }else{
                member.roles.remove(role)
            }
        }
    }

    client.on('messageReactionAdd', (reaction, user) =>{
        if(reaction.message.channel.id === channelID){
            handleReaction(reaction, user, true, client)
        }
    })
    client.on('messageReactionRemove', (reaction, user) =>{
        if(reaction.message.channel.id === channelID){
            handleReaction(reaction, user, false, client)
        }
    })
}