const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] })

const config = require('./config.json')

const command = require('./source/command')
const roleClaim = require('./source/role_claim')

const welcome = require('./embeds/welcome_embed_message')
const discord_entry_log = require('./embeds/discord_log_embed_message')
const discord_rules = require('./embeds/discord_rules_embed_message')
const company_rules = require('./embeds/company_rules_embed_message')
const paintjob = require('./embeds/paintjob_embed_message')
const convoy_commands = require('./embeds/commands_instructions_embed_message')
const company_ids = require('./embeds/company_ids_embed_message')
const recruitment_info = require('./embeds/recruitment_instructions_embed_message')
const cowork_info = require('./embeds/cowork_instructions_embed_messages')

const ping = require('./commands/ping_command')
const clear_channel = require('./commands/clear_channel_command')
const convoy = require('./commands/convoy_command')
const newsy = require('./commands/news_command')
const servers = require('./commands/servers_command')
const show_drivers = require('./commands/drivers_command')


client.on('ready', () =>{
    console.log('Client is ready !')

    roleClaim(client)
    welcome(client)
    discord_entry_log(client)
    discord_rules(client)
    company_rules(client)
    paintjob(client)
    convoy_commands(client)
    company_ids(client)
    recruitment_info(client)
    cowork_info(client)

    var convoy_title = '\u200B'
    var convoy_date = '\u200B'
    var convoy_regroup_time = '\u200B'
    var convoy_start_time = '\u200B'
    var convoy_distance = '\u200B'
    var convoy_begin_city = '\u200B'
    var convoy_end_city = '\u200B'
    var convoy_server_name = '\u200B'
    var dlcs = []
    var convoy_organizator = '\u200B'
    var convoy_map = '\u200B'

    let drivers = []
    let pilots = []
    let users_drivers = []
    let users_pilots = []


    const emoji_pilot = client.emojis.cache.find(emoji => emoji.name === 'Pilot')
    const emoji_truck = client.emojis.cache.find(emoji => emoji.name === 'Truck')

    command(client, 'ping', message_ =>{
        ping(client, message_)
    })

    command(client, 'kierowcy', message =>{
        show_drivers(client, message)
    })

    command(client, 'serwery', message =>{
        servers(client, message)
    })
    
    command(client, 'cc', message => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            clear_channel(message)
        }
    })

    command(client, 'ogłoszenie', message => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            newsy(client, message)
        }
    })

    command(client, 'setTitle', message => {
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setTitle ', '')
            convoy_title = name

            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano nazwę konwoju - ${convoy_title}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setDate', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setDate ', '')
            convoy_date = name
    
            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano datę konwoju - ${convoy_date}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setRegroupTime', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setRegroupTime ', '')
            convoy_regroup_time = name
    
            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano godzinę zbiórki na konwój - ${convoy_regroup_time}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setStartTime', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setStartTime ', '')
            convoy_start_time = name
    
            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano godzinę rozpoczęcia konwoju - ${convoy_start_time}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setDistance', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setDistance ', '')
            convoy_distance = name + ' km'
    
            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano dystans konwoju - ${convoy_distance}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setBeginCity', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setBeginCity ', '')
            convoy_begin_city = name

            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano miasto startowe - ${convoy_begin_city}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setEndCity', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setEndCity ', '')
            convoy_end_city = name

            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano miasto końcowe - ${convoy_end_city}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setServer', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setServer ', '')
            convoy_server_name = name

            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dodano nazwę serwera - ${convoy_server_name}`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'addDLC', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message === ''){
                console.log('Empty message')
            }else{
                var name = message.content.replace('!addDLC ', '')
                dlc_id = `<@&${name}>`
        
                dlcs.push(dlc_id)
        
                const channel = client.channels.cache.get(message.channel.id)
                channel.send(`DLC wymagane do wzięcia udziału - ${dlcs}`)
            }
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setOrganizator', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message === ''){
                console.log('Empty message')
            }else{
                var name = message.content.replace('!setOrganizator ', '')
                convoy_organizator = `<@&${name}>`
        
                const channel = client.channels.cache.get(message.channel.id)
                channel.send(`Dodano organizatora konwoju - ${convoy_organizator}`)
            }
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'setMap', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            var name = message.content.replace('!setMap ', '')
            convoy_map = name
    
            const channel = client.channels.cache.get(message.channel.id)
            console.log(convoy_map)
            channel.send(`Dodano mapę konwoju`)
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'clearConvoyData', message =>{
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            convoy_title = '\u200B'
            convoy_date = '\u200B'
            convoy_regroup_time = '\u200B'
            convoy_start_time = '\u200B'
            convoy_distance = '\u200B'
            convoy_begin_city = '\u200B'
            convoy_end_city = '\u200B'
            convoy_server_name = '\u200B'
            convoy_organizator = '\u200B'
            dlcs = []


            const channel = client.channels.cache.get(message.channel.id)
            channel.send(`Dane konwoju zostały wyczyszczone`).then(msg => {
                msg.delete({timeout: 4000})
            })
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    command(client, 'konwój', message => {
        message.delete({timeout: 100})
        if(message.member.hasPermission('ADMINISTRATOR')){
            const channel = client.channels.cache.get(message.channel.id)
            convoy(client, message, convoy_title, convoy_date, convoy_regroup_time, convoy_start_time, convoy_distance, convoy_begin_city, convoy_end_city, convoy_server_name, dlcs, convoy_organizator, convoy_map)
            channel.send(`Opublikowano konwój`).then(msg => {
                msg.delete({timeout: 4000})
            })
            message.channel.messages.fetch().then(results => {
                message.channel.bulkDelete(results)
            })
        }else{
            message.channel.send('You cannot do that !').then(msg => {
                msg.delete({timeout: 4000})
            })
        }
    })

    const editMessage = (pilots, drivers, channel) => {
        channel.messages.fetch({limit: 1}).then((messages) => {
            let message = messages.first()
    
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('Zapisy na konwój')
                    .setDescription(`Kierowcy zapisani na konwój\n\n${drivers}\n\n${pilots}\n`)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message.edit(embed)
            })
    
    }

    const checkTruckEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        let reactions = fetchMessage.reactions.cache.find(emoji => emoji.emoji.name === "Truck")
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name !== "Truck") return;
            let reactedUsers = await reaction.users.fetch()

            reactedUsers.map((user) =>{
                if(user.id === '781188809962422323'){

                }else{
                    const member = guild.members.cache.find(member => member.id === user.id)
                    if(pilots.indexOf(`${emoji_pilot} <@${user.id}>`) > -1){
                        console.log("User already signed for convoy")
                    }else{
                        users_drivers.push(`${emoji_truck} <@${user.id}>`)

                    }
                }
            })
            
            drivers = users_drivers.join('\n').trim()
            editMessage(pilots, drivers, channel)//
            users_drivers = []
        })
    }

    const checkPilotEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        let reactions = fetchMessage.reactions.cache.find(emoji => emoji.emoji.name === "Truck")
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name !== "Pilot") return;
            let reactedUsers = await reaction.users.fetch()

            reactedUsers.map((user) =>{
                if(user.id === '781188809962422323'){

                }else{
                    const member = guild.members.cache.find(member => member.id === user.id)
                    if(drivers.indexOf(`${emoji_truck} <@${user.id}>`) > -1){
                        console.log("User already signed for convoy")
                    }else{
                        if(member.roles.cache.some(role => role.name === 'PILOT') === true){
                            if(users_pilots.length < 10){
                                users_pilots.push(`${emoji_pilot} <@${user.id}>`)
                            }else{
                                if(users_pilots.length > 2) return;
                            }
                        }else{
                            console.log("Does not have Pilot rank")
                        }
                    }
                }
            })
            pilots = users_pilots.join('\n').trim()
            editMessage(pilots, drivers, channel)
            users_pilots = []
        })
    }

    client.on('messageReactionAdd', async (reaction, user) =>{
        if(reaction.message.partial){
            let msg = await reaction.message.fetch()
            checkTruckEmoji(reaction)
            //checkPilotEmoji(reaction)
        }else{
            checkTruckEmoji(reaction)
            //checkPilotEmoji(reaction)
        }
    })

    client.on('messageReactionRemove', async (reaction, user) =>{
        if(reaction.message.partial){
            let msg = await reaction.message.fetch()
            checkTruckEmoji(reaction)
            //checkPilotEmoji(reaction)
        }else{
            checkTruckEmoji(reaction)
            //checkPilotEmoji(reaction)
        }
    })

    const addReactions = (message, reactions) => {
        message.react(reactions[0])
        reactions.shift()
        if(reactions.length > 0){
            setTimeout(() => addReactions(message, reactions), 750)
        }
    }

    command(client, 'zapisy', message => {
        message.delete({timeout: 100})

        let react = [emoji_truck] //, emoji_pilot

        let embed = new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Zapisy na konwój')
            .setDescription(`Kierowcy zapisani na konwój`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

            message.channel.messages.fetch().then((messages) => {
                        message.channel.send(embed).then((message) =>{
                            addReactions(message, react)
                    })
            })

            id = message.channel.id
    })
})

client.login(config.token)