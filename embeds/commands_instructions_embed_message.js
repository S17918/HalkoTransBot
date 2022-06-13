const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784529325125926942'
    const targetId = '784773155574644746'
    const target_commands = '784775622765182996'

    const channel = await client.channels.fetch(channelId)
    const GoingEast = '784758875303575573'
    const ViveLaFrance = '784761300949270539'
    const Italia = '784761165401030686'
    const BalticSea = '784761221576261652'
    const Scandinavia = '784760036219813898'
    const BlackSea = '784761348050649119'
    const Iberia = '784761420419563570'
    const ProMods = '784843270802767922'
    const ets2 = '785563165169287208'

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('**Instrukcja dodawania konwoju**')
                .addFields(
                    {name: `Kolejność wpisywania komend`, value: `Komendy należy wpisywać na kanale ${client.channels.cache.get(target_commands).toString()}`},
                    {name: '!setTitle <Nazwa Konwoju>', value: 'Dodaje nazwę konwoju np Konwój przyjaźni'},
                    {name: '!setDate <Data>', value: 'Dodaje datę konwoju np 12/05/2020'},
                    {name: '!setRegroupTime <Godzina>', value: 'Dodaje godzinę zbiórki np 19:30'},
                    {name: '!setStartTime <Godzina>', value: 'Dodaje godzinę rozpoczęcia konwoju np 20:00'},
                    {name: '!setDistance <Dystans>', value: 'Dodaje dystans konwoju np 1245\n**UWAGA - nie dodawać km - wystarczy sama liczba**'},
                    {name: '!setBeginCity <Nazwa Miasta Początkowego>', value: 'Dodaje nazwę początkowego miasta np Warszawa'},
                    {name: '!setEndCity <Nazwa Miasta Końcowego>', value: 'Dodaje nazwę miata końcowego np Paryż'},
                    {name: '!setServer <Nazwa serwera>', value: 'Dodaje nazwę serwera np Europa 2'},
                    {name: '!addDLC <DLC ID>', value: 'Dodaje informację o DLC potrzebnym do wzięcia udziału w konwoju. Należy podać ID rangi danego DLC. ID są dostępne w liście niżej. Komendy można używać kilkukrotnie - DLC są dodawane do listy'},
                    {name: '!addAllDLC', value: 'Dodaje informację o potrzeby posiadania **WSZYSTKICH** DLC - należy używać przy konwojach ProMods'},
                    {name: '!setOrganizator <Organizator ID>', value: 'Dodaje informację o organizatorze konwoju. Należy podać ID rangi. Lista ID poniżej.'},
                    {name: '!setMap <Link do mapy>', value: 'Dodaje mapę (trasę) konwoju'},
                    {name: '!konwój <Data format DD-MM-RRRR>', value: 'Publikuje nowy kanał tekstowy ze wszystkimi danymi podanymi wcześniej'},
                    {name: '!clearConvoyData', value: 'Czyści podane wcześniej dane'},
                    {name: '\u200B', value: '**Lista ID dostępnych DLC**'},
                    {name: 'Going East', value: `${GoingEast}`},
                    {name: 'Vive La France', value: `${ViveLaFrance}`},
                    {name: 'Italia', value: `${Italia}`},
                    {name: 'Beyond the Baltic Sea', value: `${BalticSea}`},
                    {name: 'Scandinavia', value: `${Scandinavia}`},
                    {name: 'Road to the Black Sea', value: `${BlackSea}`},
                    {name: 'Iberia', value: `${Iberia}`},
                    {name: 'ProMods', value: `${ProMods}`},
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Lista ID Firm', value: `Dostępna na kanale ${client.channels.cache.get(targetId).toString()}`}
                )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed)
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('HalkoTrans Logistics')
                    .setDescription('**Instrukcja dodawania konwoju**')
                    .addFields(
                        {name: `Kolejność wpisywania komend`, value: `Komendy należy wpisywać na kanale ${client.channels.cache.get(target_commands).toString()}`},
                        {name: '!setTitle <Nazwa Konwoju>', value: 'Dodaje nazwę konwoju np Konwój przyjaźni'},
                        {name: '!setDate <Data>', value: 'Dodaje datę konwoju np 12/05/2020'},
                        {name: '!setRegroupTime <Godzina>', value: 'Dodaje godzinę zbiórki np 19:30'},
                        {name: '!setStartTime <Godzina>', value: 'Dodaje godzinę rozpoczęcia konwoju np 20:00'},
                        {name: '!setDistance <Dystans>', value: 'Dodaje dystans konwoju np 1245\n**UWAGA - nie dodawać km - wystarczy sama liczba**'},
                        {name: '!setBeginCity <Nazwa Miasta Początkowego>', value: 'Dodaje nazwę początkowego miasta np Warszawa'},
                        {name: '!setEndCity <Nazwa Miasta Końcowego>', value: 'Dodaje nazwę miata końcowego np Paryż'},
                        {name: '!setServer <Nazwa serwera>', value: 'Dodaje nazwę serwera np Europa 2'},
                        {name: '!addDLC <DLC ID>', value: 'Dodaje informację o DLC potrzebnym do wzięcia udziału w konwoju. Należy podać ID rangi danego DLC. ID są dostępne w liście niżej. Komendy można używać kilkukrotnie - DLC są dodawane do listy'},
                        {name: '!addAllDLC', value: 'Dodaje informację o potrzeby posiadania **WSZYSTKICH** DLC - należy używać przy konwojach ProMods'},
                        {name: '!setOrganizator <Organizator ID>', value: 'Dodaje informację o organizatorze konwoju. Należy podać ID rangi. Lista ID poniżej.'},
                        {name: '!setMap <Link do mapy>', value: 'Dodaje mapę (trasę) konwoju'},
                        {name: '!konwój <Data format DD-MM-RRRR>', value: 'Publikuje nowy kanał tekstowy ze wszystkimi danymi podanymi wcześniej'},
                        {name: '!clearConvoyData', value: 'Czyści podane wcześniej dane'},
                        {name: '\u200B', value: '**Lista ID dostępnych DLC**'},
                        {name: 'Going East', value: `${GoingEast}`},
                        {name: 'Vive La France', value: `${ViveLaFrance}`},
                        {name: 'Italia', value: `${Italia}`},
                        {name: 'Beyond the Baltic Sea', value: `${BalticSea}`},
                        {name: 'Scandinavia', value: `${Scandinavia}`},
                        {name: 'Road to the Black Sea', value: `${BlackSea}`},
                        {name: 'Iberia', value: `${Iberia}`},
                        {name: 'ProMods', value: `${ProMods}`},
                        {name: 'Brak', value: `${ets2}`},
                        {name: 'Lista ID Firm', value: `Dostępna na kanale ${client.channels.cache.get(targetId).toString()}`}
                    )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}