const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] })

const config = require('./config.json')

const command = require('./source/command')
const roleClaim = require('./source/role_claim')
const roleClaimAdditional = require('./source/role_claim_additional')

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
    roleClaimAdditional(client)
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

    var first_pilot = null
    var second_pilot = null

    let drivers = []
    let pilots = []
    let users_drivers = []
    let users_pilots = []

    let scania_list = []
    let scania_final = []
    let volvo_list = []
    let volvo_final = []
    let daf_list = []
    let daf_final = []
    let iveco_list = []
    let iveco_final = []
    let man_list = []
    let man_final = []
    let mercedes_list = []
    let mercedes_final = []
    let renault_list = []
    let renault_final = []

    const emoji_pilot = client.emojis.cache.find(emoji => emoji.name === 'Pilot')
    const emoji_truck = client.emojis.cache.find(emoji => emoji.name === 'Truck')

    const emoji_mercedes = client.emojis.cache.find(emoji => emoji.name === 'Mercedes')
    const emoji_renault = client.emojis.cache.find(emoji => emoji.name === 'Renault')
    const emoji_scania = client.emojis.cache.find(emoji => emoji.name === 'Scania')
    const emoji_volvo = client.emojis.cache.find(emoji => emoji.name === 'Volvo')
    const emoji_man = client.emojis.cache.find(emoji => emoji.name === 'Man')
    const emoji_iveco = client.emojis.cache.find(emoji => emoji.name === 'Iveco')
    const emoji_daf = client.emojis.cache.find(emoji => emoji.name === 'Daf')

    const emoji_error = client.emojis.cache.find(emoji => emoji.name === "Error")

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

    const editMessageConvoyUsers = (pilots, drivers, channel) => {
        var desription = ''
        channel.messages.fetch({limit:2}).then((messages) => {
            if(drivers.length === 0 && pilots.length === 0) {
                desription = `Kierowcy zapisani na konwój:\n\n${emoji_error} Brak zgłoszeń\n\n`
            } else {
                if(drivers.length != 0 && pilots.length === 0) {
                    desription = `Kierowcy zapisani na konwój:\n\n${drivers}\n\n\n`
                }
                if(pilots.length != 0 && drivers.length === 0) {
                    desription = `Kierowcy zapisani na konwój:\n\n${pilots}\n\n\n`
                }
                if(pilots.length != 0 && drivers.length != 0) {
                    desription = `Kierowcy zapisani na konwój\n\n**Piloci:**\n\n${pilots}\n\n**Kierowcy:**\n\n${drivers}\n\n\n`
                }
            }

            let message = messages.first()
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('Zapisy na konwój')
                    .setDescription(desription)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message.edit(embed)
            })
    }

    const editMessageProducent = (channel, scania, volvo, daf, man, mercedes) => {
        let producent = ``

        var masterArry = [scania, volvo, daf, man, mercedes]     

        var maxArrSingle = function(arr) {
            return arr.reduce(
              function(acc,val){
                return Math.max(acc,val);
              },
              -Infinity);
          }
          
        var maxArrIndexes = function(arr) {
            var max = maxArrSingle(arr);
            return arr.reduce(function(acc,val,idx) {
              if (val >= max) acc.push(idx);
              return acc;
            },[]);
        }

        const lengths = masterArry.map(a => a.length)

        if(lengths.every(a => a === 0)){
            producent = `${emoji_error} Brak głosów\n\n`
        }else{
            let index = maxArrIndexes(Array.from(lengths))
        
            if(index.length === 1 ){
                if(index[0] === 0) { producent = `${emoji_scania} Scania\n\n` }
                if(index[0] === 1) { producent = `${emoji_volvo} Volvo\n\n` }
                if(index[0] === 2) { producent = `${emoji_daf} Daf\n\n` }
                if(index[0] === 3) { producent = `${emoji_man} Man\n\n` }
                if(index[0] === 4) { producent = `${emoji_mercedes} Mercedes\n\n` }
            } else {
                producent = `${emoji_error} Nie udało się wybrać ciężarówki\n\n`
            }
        }


        channel.messages.fetch({limit:2}).then((messages) => {
            let message = messages.last()
            let embed = new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Wybór ciężarówki do konwoju')
            .setDescription(`Producent ciężarówki wybrany na konwój:\n\n${producent}\n\n`)
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
                        reaction.users.remove(user.id)
                    }else{
                        users_drivers.push(`${emoji_truck} <@${user.id}>`)
                    }
                }
            })
            
            drivers = users_drivers.join('\n').trim()
            editMessageConvoyUsers(pilots, drivers, channel)
            users_drivers = []
        })
    }

    const checkPilotEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        let reactions = fetchMessage.reactions.cache.find(emoji => emoji.emoji.name === "Pilot")
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name !== "Pilot") return;
            let reactedUsers = await reaction.users.fetch()

            reactedUsers.map((user) =>{
                if(first_pilot != null && first_pilot.includes(user.id)){
                    first_pilot = null
                }
                if(second_pilot != null && second_pilot.includes(user.id)){
                    second_pilot = null
                }
                if(first_pilot != null && second_pilot != null) {
                    if(user.id != '781188809962422323'){
                        reaction.users.remove(user.id)
                    }
                }
                if(user.id === '781188809962422323'){

                }else{
                    const member = guild.members.cache.find(member => member.id === user.id)
                    if(drivers.indexOf(`${emoji_truck} <@${user.id}>`) > -1){
                        reaction.users.remove(user.id)
                    }else{
                        if(member.roles.cache.some(role => role.name === 'PILOT') === true){
                            value = `${emoji_pilot} <@${user.id}>`
                            if(first_pilot === null) {
                                first_pilot = value
                            } else if(first_pilot != null && second_pilot === null) {
                                if(first_pilot != value){
                                    second_pilot = value
                                }
                            }
 
                        } else {
                            reaction.users.remove(user.id)
                        }
                    }                
               }
            })
            pilots = [first_pilot, second_pilot].join('\n').trim()
            editMessageConvoyUsers(pilots, drivers, channel)
            users_pilots = []
        })
    }

    const checkScaniaEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Scania"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){
                        
                    }else{
                        if(scania_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            scania_list.push(user.id)
                        }
                    }
                })
                scania_final = scania_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                scania_list = []
            }
        })
    }

    const checkVolvoEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Volvo"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){

                    }else{
                        if(volvo_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            volvo_list.push(user.id)
                        }
                    }
                })
                volvo_final = volvo_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                volvo_list = []
            }
        })
    }

    const checkDafEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Daf"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){

                    }else{
                        if(daf_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            daf_list.push(user.id)
                        }
                    }
                })
                daf_final = daf_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                daf_list = []
            }
        })
    }

    const checkIvecoEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Iveco"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){

                    }else{
                        if(iveco_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            iveco_list.push(user.id)
                        }
                    }
                })
                iveco_final = iveco_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                daf_list = []
            }
        })
    }

    const checkManEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Man"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){

                    }else{
                        if(man_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            man_list.push(user.id)
                        }
                    }
                })
                man_final = man_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                man_list = []
            }
        })
    }

    const checkMercedesEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Mercedes"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){

                    }else{
                        if(mercedes_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            mercedes_list.push(user.id)
                        }
                    }
                })
                mercedes_final = mercedes_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                mercedes_list = []
            }
        })
    }

    const checkRenaultEmoji = async (reaction) => {
        const { guild } = reaction.message
        const channel = await client.channels.fetch(reaction.message.channel.id)
        const messageID = reaction.message.id
        const fetchMessage = await reaction.message.channel.messages.fetch(messageID);
        fetchMessage.reactions.cache.map(async (reaction) => {
            if(reaction.emoji.name === "Renault"){
                let reactedUsers = await reaction.users.fetch()
                reactedUsers.map((user) => {
                    if(user.id === '781188809962422323'){

                    }else{
                        if(renault_list.indexOf(user.id) > -1){
                            console.log("User already voted")
                        }else{
                            renault_list.push(user.id)
                        }
                    }
                })
                renault_final = renault_list
                editMessageProducent(channel, scania_final, volvo_final, daf_final, man_final, mercedes_final)
                renault_list = []
            }
        })
    }

    client.on('messageReactionAdd', async (reaction, user) =>{
        if(reaction.message.partial){
            let msg = await reaction.message.fetch()
            checkTruckEmoji(reaction)
            checkPilotEmoji(reaction)
            checkScaniaEmoji(reaction)
            checkVolvoEmoji(reaction)
            checkDafEmoji(reaction)
            // checkIvecoEmoji(reaction)
            checkManEmoji(reaction)
            checkMercedesEmoji(reaction)
            // checkRenaultEmoji(reaction)
            //checkPilotEmoji(reaction)
        }else{
            checkTruckEmoji(reaction)
            checkPilotEmoji(reaction)
            checkScaniaEmoji(reaction)
            checkVolvoEmoji(reaction)
            checkDafEmoji(reaction)
            // checkIvecoEmoji(reaction)
            checkManEmoji(reaction)
            checkMercedesEmoji(reaction)
            // checkRenaultEmoji(reaction)
            //checkPilotEmoji(reaction)
        }
    })

    client.on('messageReactionRemove', async (reaction, user) =>{
        if(reaction.message.partial){
            let msg = await reaction.message.fetch()
            checkTruckEmoji(reaction)
            checkPilotEmoji(reaction)
            checkScaniaEmoji(reaction)
            checkVolvoEmoji(reaction)
            checkDafEmoji(reaction)
            // checkIvecoEmoji(reaction)
            checkManEmoji(reaction)
            checkMercedesEmoji(reaction)
            // checkRenaultEmoji(reaction)
            // checkPilotEmoji(reaction)
        }else{
            checkTruckEmoji(reaction)
            checkPilotEmoji(reaction)
            if(first_pilot != null && first_pilot.includes(user.id)){
                first_pilot = null
            }
            if(second_pilot != null && second_pilot.includes(user.id)){
                second_pilot = null
            }
            checkScaniaEmoji(reaction)
            checkVolvoEmoji(reaction)
            checkDafEmoji(reaction)
            // checkIvecoEmoji(reaction)
            checkManEmoji(reaction)
            checkMercedesEmoji(reaction)
            // checkRenaultEmoji(reaction)
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

        let react = [emoji_truck, emoji_pilot]

        let react_prod = [emoji_scania, emoji_volvo, emoji_daf, emoji_man, emoji_mercedes]

        let embed_prod = new Discord.MessageEmbed()
        .setColor('#00c3ff')
        .setTitle('Wybór ciężarówki do konwoju')
        .setDescription(`Producent ciężarówki wybrany na konwój:`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())

        let embed = new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Zapisy na konwój')
            .setDescription(`Kierowcy zapisani na konwój`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())

            message.channel.messages.fetch().then((messages) => {
                message.channel.send(embed_prod).then((message) =>{
                    addReactions(message, react_prod)
                    message_producent = message
                })
            })

            message.channel.messages.fetch().then((messages) => {
                message.channel.send(embed).then((message) =>{
                    addReactions(message, react)
                })
            })

            id = message.channel.id
    })

    command(client, 'ciezarowka', message => {
        message.delete({timeout: 100})

        let react = [emoji_scania, emoji_volvo, emoji_daf, emoji_man, emoji_mercedes]

        let embed = new Discord.MessageEmbed()
        .setColor('#00c3ff')
        .setTitle('Wybór ciężarówki do konwoju')
        .setDescription(`Producent ciężarówki wybrany na konwój:`)
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