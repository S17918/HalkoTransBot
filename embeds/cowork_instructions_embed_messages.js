const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784852390334955521'
    const zarzad = '784170150739968062'

    const channel = await client.channels.fetch(channelId)

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('Informacje dotyczące współpracy z naszą firmą')
                .addFields(
                    {name: '1. Nadanie rang', value: `W celu stworzenia i nadania odpowiednich rang i kanałów prosimy o bezpośredni kontakt z <@&${zarzad}>. Każda firma otrzyma prywatny kanał do kontaktu z nami oraz rangi z nazwą firmy.`},
                    {name: '2. Konwoje', value: `**HalkoTrans Logistics** jako firma zawsze jest chętna do wzięcia udziału w zorganizowanych konwojach międzyfirmowych. Informacje oraz ustalenia dotyczące takich wydarzeń prosimy publikować w prywatnych kanałach swojej firmy tak by przekazane informacje nie trafiły w niepowołane ręce.\nJeżeli chciałbyś nam przedstawić propozycję konwoju prosimy o przygotowanie jak największej ilości szczegółów - Datę, Miejsce, Godziny, Mapę, Serwer,`},
                    {name: '3. Współpraca długoterminowa', value: 'Z miłą chęcią podejmiemy częstą i długoterminową współpracę z innymi firmami. Jednorazowy kontakt i brak dalszej aktywności może skutkować usunięciem twojej firmy z naszego serwera.'},
                    {name: '4. Inne propozycje', value: 'Jeżeli twoja firma chciałaby nam zaproponować coś innego niż konwój prosimy o kontakt. **Uprzedzając pytania - fuzje / łączenie firm / spółki nas nie interesują**'},
                    {name: '5. Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed)
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('HalkoTrans Logistics')
                    .setDescription('Informacje dotyczące współpracy z naszą firmą')
                    .addFields(
                        {name: '1. Nadanie rang', value: `W celu stworzenia i nadania odpowiednich rang i kanałów prosimy o bezpośredni kontakt z <@&${zarzad}>. Każda firma otrzyma prywatny kanał do kontaktu z nami oraz rangi z nazwą firmy.`},
                        {name: '2. Konwoje', value: `**HalkoTrans Logistics** jako firma zawsze jest chętna do wzięcia udziału w zorganizowanych konwojach międzyfirmowych. Informacje oraz ustalenia dotyczące takich wydarzeń prosimy publikować w prywatnych kanałach swojej firmy tak by przekazane informacje nie trafiły w niepowołane ręce.\nJeżeli chciałbyś nam przedstawić propozycję konwoju prosimy o przygotowanie jak największej ilości szczegółów - Datę, Miejsce, Godziny, Mapę, Serwer,`},
                        {name: '3. Współpraca długoterminowa', value: 'Z miłą chęcią podejmiemy częstą i długoterminową współpracę z innymi firmami. Jednorazowy kontakt i brak dalszej aktywności może skutkować usunięciem twojej firmy z naszego serwera.'},
                        {name: '4. Inne propozycje', value: 'Jeżeli twoja firma chciałaby nam zaproponować coś innego niż konwój prosimy o kontakt. **Uprzedzając pytania - fuzje / łączenie firm / spółki nas nie interesują**'},
                        {name: '5. Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                    )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}