const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784174936717262868'
    const zarzad = '784170150739968062'

    const channel = await client.channels.fetch(channelId)

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('**Regulamin serwera discord**')
                .addFields(
                    {name: '1. Bot / Discord', value: `BOT oraz serwer Discord są własnością firmy **HalkoTrans Logitics**. Osobą odpowiedzialną za działanie serwisu jest <@${232885408801751040}>. W przypadku wystąpienia problemów z serwerem / botem prosimy o bezpośredni kontakt z tą osobą.`},
                    {name: '2. Reakcje na wiadomości', value: 'Zbyt szybkie dodawanie i usuwanie reakcji z wiadomości może powodować problemy z działaniem BOTa. Każda celowa próba popsucia BOTa będzie skutkowała wyłączeniem możliwości reagowania na wiadomości.'},
                    {name: '3. Kanały prywatne', value: `Kanał prywatny może zostać nadany danej osobie lub grupie osób po zgłoszeniu prośby do <@&${zarzad}>`},
                    {name: '4. Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed)
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('**HalkoTrans Logistics**')
                    .setDescription('Regulamin serwera discord')
                    .addFields(
                        {name: '1. Bot / Discord', value: `BOT oraz serwer Discord są własnością firmy **HalkoTrans Logitics**. Osobą odpowiedzialną za działanie serwisu jest <@${232885408801751040}>. W przypadku wystąpienia problemów z serwerem / botem prosimy o bezpośredni kontakt z tą osobą.`},
                        {name: '2. Reakcje na wiadomości', value: 'Zbyt szybkie dodawanie i usuwanie reakcji z wiadomości może powodować problemy z działaniem BOTa. Każda celowa próba popsucia BOTa będzie skutkowała wyłączeniem możliwości reagowania na wiadomości.'},
                        {name: '3. Kanały prywatne', value: `Kanał prywatny może zostać nadany danej osobie lub grupie osób po zgłoszeniu prośby do <@&${zarzad}>`},
                        {name: '4. Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                    )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}