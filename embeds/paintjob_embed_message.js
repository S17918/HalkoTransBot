const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784501016799477761'

    const channel = await client.channels.fetch(channelId)
    
    let webHook = {
        token: "14rtLnCRuNmmlE27qZBw2HgaqXPVUEh0KgsoJijMdP9AEPzk2mjhBZ-mM6emenpkwaUG",
        id: "784506180399005738"
    }
    const hook = new Discord.WebhookClient(webHook.id, webHook.token)


    let img = [
        'https://cdn.discordapp.com/attachments/555861264874733608/784504104859729930/zdj_1.jpg',
        'https://cdn.discordapp.com/attachments/555861264874733608/785575557651497010/Halko_mal2.jpg',
        'https://cdn.discordapp.com/attachments/555861264874733608/785575561006809148/Halko_mal3.jpg',
        'https://cdn.discordapp.com/attachments/555861264874733608/785575563460608040/Halko_mal4.jpg',
        'https://cdn.discordapp.com/attachments/555861264874733608/785575567525281796/Halko_mal5.jpg',
        'https://cdn.discordapp.com/attachments/555861264874733608/785575592627666964/Halko_mal6.jpg',
    ]


    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){
            sendImage()
        }else{
            //Donothing
        }   
    })     
       
    
    function sendImage(){
        let embeds = []
        embeds.push(new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('HalkoTrans Logistics')
            .setDescription('**Malowanie Firmowe**')
            .setImage(img[0])
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL()))
        embeds.push(new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Kolor 1')
            .setDescription('**UWAGA - NALEŻY WYBRAĆ NOWĄ SCANIE S**')
            .setImage(img[1])
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL()))
        embeds.push(new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Kolor 2')
            .setImage(img[2])
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL()))
        embeds.push(new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Malowanie Sade\nUstawiamy niebieski pasek')
            .setImage(img[3])
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL()))
        embeds.push(new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Ustawiamy biały spód malowania')
            .setImage(img[4])
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL()))
        embeds.push(new Discord.MessageEmbed()
            .setColor('#00c3ff')
            .setTitle('Efekt końcowy')
            .setImage(img[5])
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL()))
        hook.send({embeds: embeds});
    }
}