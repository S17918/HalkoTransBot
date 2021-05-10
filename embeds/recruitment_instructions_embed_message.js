const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784849506222866482'

    const channel = await client.channels.fetch(channelId)
    const target_rules = '784174966736289834'

    const rekruter = '784170290619220069'
    const zarzad = '784170150739968062'
    const szef = '784169388672155709'

    const chann = '784849755858534451'

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('Informacje dotyczące procesu rekrutacji')
                .addFields(
                    {name: '1. Wymagania', value: `Poniżej podstawowe wymagania, które musisz spełnić jeśli chcesz dołączyć do firmy:\n**1.** Do spedycji przyjmowane są osoby w wieku 17 lat lub więcej\n**2.** Posiadające poczucie humoru oraz dystans do samego siebie\n**3.** Sprawny mikrofon oraz chęci do wspólnej jazdy\n**4.** Znajomość regulaminu firmy HalkoTrans Logistics dostępnego na kanale ${client.channels.cache.get(target_rules).toString()}`},
                    {name: '2. Złoż podanie TruckersMP', value: `Jeśli spełniasz wszystkie kryteria podane wyżej możesz przejść do etapu składania podania. W tym celu należy wejść na stronę TruckersMp i uzupełnić krótki formularz: [HalkoTrans Logistics](https://truckersmp.com/vtc/86)`},
                    {name: '3. Złóż podanie TrucksBook', value: `Po złożeniu podania na stronie TruckersMP możesz od razu zarejestrować się na stronie [TrucksBook](https://trucksbook.eu/). Jest to strona na której będą logowane twoje wszystkie trasy. Po założeniu konta możesz złożyć podanie do naszej firmy [HalkoTrans Logistics](https://trucksbook.eu/company/27221)`},
                    {name: '4. Rozmowa rekrutacyjna', value: `Po złożeniu wymaganych podań zostało już tylko czekać na rozmowę rekrutacyjną. Może ją przeprowadzić <@&${rekruter}>, <@&${zarzad}> lub <@&${szef}>. Jeżeli masz czas to wejdź na kanał **Czekam na rekrutację**. Osoba uprawniona do przeprowadzenia rozmowy rekrutacyjnej powinna niedługo się pojawić`},
                    {name: '5. Decyzja', value: 'Decyzja o podjęciu współpracy między naszą firmą a twoją osobą zostanie przekazana podczas rozmowy na Discordzie. Jeśli będzie pozytywna otrzymasz wszystkie informacje potrzebne do rozpoczęcia przygody jako profesjonalny kierowca wirtualnej ciężarówki.'},
                    {name: '6. Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                    )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed)
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('HalkoTrans Logistics')
                    .setDescription('Informacje dotyczące procesu rekrutacji')
                    .addFields(
                        {name: '1. Wymagania', value: `Poniżej podstawowe wymagania, które musisz spełnić jeśli chcesz dołączyć do firmy:\n**1.** Do spedycji przyjmowane są osoby w wieku 17 lat lub więcej\n**2.** Posiadające poczucie humoru oraz dystans do samego siebie\n**3.** Sprawny mikrofon oraz chęci do wspólnej jazdy\n**4.** Znajomość regulaminu firmy HalkoTrans Logistics dostępnego na kanale ${client.channels.cache.get(target_rules).toString()}`},
                        {name: '2. Złoż podanie TruckersMP', value: `Jeśli spełniasz wszystkie kryteria podane wyżej możesz przejść do etapu składania podania. W tym celu należy wejść na stronę TruckersMp i uzupełnić krótki formularz: [HalkoTrans Logistics](https://truckersmp.com/vtc/86)`},
                        {name: '3. Złóż podanie TrucksBook', value: `Po złożeniu podania na stronie TruckersMP możesz od razu zarejestrować się na stronie [TrucksBook](https://trucksbook.eu/). Jest to strona na której będą logowane twoje wszystkie trasy. Po założeniu konta możesz złożyć podanie do naszej firmy [HalkoTrans Logistics](https://trucksbook.eu/company/27221)`},
                        {name: '4. Rozmowa rekrutacyjna', value: `Po złożeniu wymaganych podań zostało już tylko czekać na rozmowę rekrutacyjną. Może ją przeprowadzić <@&${rekruter}>, <@&${zarzad}> lub <@&${szef}>. Jeżeli masz czas to wejdź na kanał **Czekam na rekrutację**. Osoba uprawniona do przeprowadzenia rozmowy rekrutacyjnej powinna niedługo się pojawić`},
                        {name: '5. Decyzja', value: 'Decyzja o podjęciu współpracy między naszą firmą a twoją osobą zostanie przekazana podczas rozmowy na Discordzie. Jeśli będzie pozytywna otrzymasz wszystkie informacje potrzebne do rozpoczęcia przygody jako profesjonalny kierowca wirtualnej ciężarówki.'},
                        {name: '6. Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                        )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}