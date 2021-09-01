const Discord = require('discord.js')
module.exports = async (client) => {
    const channelId = '784174966736289834'

    const channel = await client.channels.fetch(channelId)
    const FoguId = '232885408801751040'
    const CzlapekId = '234309689540739072'
    const SmsId = '555858068580335627'
    const BossId = '784169388672155709'
    const Ats = '784174123370545170'
    const target_malowanie = '784501016799477761'
    const zarzad = '784170150739968062'
    const pilot = '784174321354539039'
    const dyspozytor = '784170659395272725'

    const _5 = '784173791353110549'
    const rekrut = '784173750622224394'
    const _20 = '784173710612496385'
    const początkujący = '784173657257017446'
    const _75 = '784173587459342348'
    const kierowca__ = '784173484371869708'
    const _350 = '784173434346405888'
    const zawodowy_kierowca = '784173392029810729'
    const _1M = '784173345460453386'
    const elitartny = '784173258328113162'
    const _4M = '784173183132500008'
    const król = '784172942560985109'
    const _10M = '784172875975884800'
    const legenda = '784172781301530634'
    const _10M_plus = '784172724494008401'
    const mistrz = '784172477483188224'

    channel.messages.fetch().then((messages) => {
        if(messages.size === 0){

            let embed = new Discord.MessageEmbed()
                .setColor('#00c3ff')
                .setTitle('HalkoTrans Logistics')
                .setDescription('**Regulamin firmy**')
                .addFields(
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Postanowienia Ogólne', value: `**1.** Firma **HalkoTrans Logistic** została założona przez graczy:\n<@${FoguId}> oraz <@${CzlapekId}>\n**2.** Aktualny <@&${BossId}> sprawujący władzę w firmie to <@${SmsId}>\n**3.** Regulamin obowiązuje każdego pracownika firmy **HalkoTrans Logistic**. Nieprzestrzeganie regulaminu będzie skutkowało usunięciem z firmy\n**4.** Niezapoznanie się z regulaminem nie zwalnia kierowcy z jego przestrzegania\n**5.** Każdy kierowca firmy zobowiązany jest do godnego reprezentowania barw **HalkoTrans Logistic** w wirtualnym świecie oraz poza nim.`},
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Regulamin Kierowcy', value: `**Kierowca zobowiązany jest do:**\n**1.** Noszenia tagu firmowego **HalkoTrans** o kolorze niebieskim \n**(Red: 0, Green: 195, Blue: 255)**\n**2.** Posiadania minimum jednej ciężarówki oraz naczepy w malowaniu firmowym. Odpowiednie malowanie można znaleźć na kanale ${client.channels.cache.get(target_malowanie).toString()}\n**3.** Aktywnego uczestnictwa w konwojach firmowych bądź międzyfirmowych\n**4.** Bycia aktywnym na komunikatorze głosowym discord\n**5.** Przestrzegania savoir-vivre\n**6.** Przejechania w ciągu miesiąca **minimum 1000 km** (tysiąca km) potwierdzonych przez stronę Truckbook (trasy mogą być wykonywane w trybie Multiplayer na platformie ETS 2, ATS lub Single Player)\n**7.** Każdy z kierowców ma możliwość zorganizowania konwoju firmowego. Wystarczy się zgłosić do <@&${zarzad}>\n**8.** Podczas obecności odoby z rangą <@&${pilot}>, wszyscy członkowie firmy są zobowiązani do słuchania jego poleceń dotyczących punktów trasy oraz ruchu drogowego\n**9.** Kierowca może poprosić osobę z rangą <@&${dyspozytor}> o zlecenie trasy w ETS 2 i ATS\n**10.** Kierowca ma prawo odrzucić trasę zleconą przez dyspozytora bez żadnych konsekwencji\n**11.** Kierowca ma prawo do wzięcia urlopu w dowolnym momencie na czas nieokreślony. W tym celu należy się skontaktować z <@&${BossId}>\n**12.** Nieusprawiedliwiony brak aktywności dłuższy niż 3 miesiące skutkuje wydaleniem z firmy`},
                    {name: '6. Bycia aktywnym na komunikatorze głosowym discord', value: `**7.** Każdy z kierowców ma możliwość zorganizowania konwoju firmowego. Wystarczy się zgłosić do <@&${zarzad}>\n**8.** Rangę <@&${pilot}> otrzymuje automatycznie każda osoba posiadająca rangę <@&${elitartny}> lub wyżej.\n**9.** Podczas obecności osoby z rangą <@&${pilot}>, wszyscy członkowie firmy są zobowiązani do słuchania jego poleceń dotyczących punktów trasy oraz ruchu drogowego\n**10.** Kierowca może poprosić osobę z rangą <@&${dyspozytor}> o zlecenie trasy w ETS 2 i ATS\n**11.** Kierowca ma prawo odrzucić trasę zleconą przez dyspozytora bez żadnych konsekwencji\n**12.** Kierowca ma prawo do wzięcia urlopu w dowolnym momencie na czas nieokreślony. W tym celu należy się skontaktować z <@&${BossId}>\n**13.** Nieusprawiedliwiony brak aktywności dłuższy niż 3 miesiące skutkuje wydaleniem z firmy`},
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Regulamin Dyspozytora', value: '**1.** Dyspozytor może zlecić na raz maksymalnie 4 trasy jednej osobie\n**2.** Dyspozytor nie powinien zlecać za długich tras\n**3.** Dyspozytor może zostać poproszony o zlecenie trasy przez kierowcę. Wtedy jest on zobowiązany do zlecenia trasy, o ile jest to zgodne z regulaminem\n**4.** dyspozytor jest zobowiązany do usuwania nieakceptowanych zleceń starszych niż 24h'},
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Regulamin Pilota', value: `**1.** Rangę <@&${pilot}> otrzymuje automatycznie każda osoba posiadająca rangę <@&${elitartny}> lub wyżej. **2.** Pilot ma obowiązek poruszać się pojazdem dostosowanym do wykonywanej przez niego pracy.**(Skoda w malowaniu PILOT oraz żółte sygnały świetlne)**\n**3.** Pilot dba o bezpieczeństwo konwoju podczas przejazdu między Punktem Startowym, a Punktem Docelowym\n**4.** Pilot wyznacza prędkość konwoju, trasę oraz ilość i miejsca postojów\n**5.** Pilot ma obowiązek pilnowania porządku w konwoju. Przerwa między kolejnymi pojazdami nie może być za duża`},
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Malowanie Firmowe', value: `**1.** Każdy kierowca jest zobowiązany do używania malowania firmowego podczas jazdy w trybie multiplayer\n**2.** Malowanie ma nazwę **SADE** i składa się z trzech odpowiednich kolorów\n**3.** Malowanie firmowe nie obowiązuje w grze <@&${Ats}> oraz w ciężarówkach z 4-osiowym zawieszeniem\n**4.** Instrukcja ustawień malowania jest dostępna na kanale ${client.channels.cache.get(target_malowanie).toString()}`}, //odnośnik do kanału malowanie
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Rangi', value: 'Liczone na podstawie całkowitego przejechanego dystansu w firmie'},
                    {name: '\u200B', value: `<@&${mistrz}>\n<@&${_10M_plus}>\n\n<@&${legenda}>\n<@&${_10M}>\n\n<@&${król}>\n<@&${_4M}>\n\n<@&${elitartny}>\n<@&${_1M}>\n\n<@&${zawodowy_kierowca}>\n<@&${_350}>\n\n<@&${kierowca__}>\n<@&${_75}>\n\n<@&${początkujący}>\n<@&${_20}>\n\n<@&${rekrut}>\n<@&${_5}>`},
                    {name: '\u200B', value: '\u200B'},
                    {name: 'Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                )
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                
                channel.send(embed)
        }else{
            for(const message of messages){
                let embed = new Discord.MessageEmbed()
                    .setColor('#00c3ff')
                    .setTitle('HalkoTrans Logistics')
                    .setDescription('**Regulamin firmy**')
                    .addFields(
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Postanowienia Ogólne', value: `**1.** Firma **HalkoTrans Logistic** została założona przez graczy:\n<@${FoguId}> oraz <@${CzlapekId}>\n**2.** Aktualny <@&${BossId}> sprawujący władzę w firmie to <@${SmsId}>\n**3.** Regulamin obowiązuje każdego pracownika firmy **HalkoTrans Logistic**. Nieprzestrzeganie regulaminu będzie skutkowało usunięciem z firmy\n**4.** Niezapoznanie się z regulaminem nie zwalnia kierowcy z jego przestrzegania\n**5.** Każdy kierowca firmy zobowiązany jest do godnego reprezentowania barw **HalkoTrans Logistic** w wirtualnym świecie oraz poza nim.`},
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Regulamin Kierowcy', value: `**Kierowca zobowiązany jest do:**\n**1.** Noszenia tagu firmowego **HalkoTrans** o kolorze niebieskim \n**(Red: 0, Green: 195, Blue: 255)**\n**2.** Posiadania minimum jednej ciężarówki oraz naczepy w malowaniu firmowym. Odpowiednie malowanie można znaleźć na kanale ${client.channels.cache.get(target_malowanie).toString()}\n**3.** Aktywnego uczestnictwa w konwojach firmowych bądź międzyfirmowych\n**4.** Przestrzegania savoir-vivre\n**5.** Przejechania w ciągu miesiąca **minimum 1000 km** (tysiąca km) potwierdzonych przez stronę Truckbook (trasy mogą być wykonywane w trybie Multiplayer na platformie ETS 2, ATS lub Single Player`},
                        {name: '6. Bycia aktywnym na komunikatorze głosowym discord', value: `**7.** Każdy z kierowców ma możliwość zorganizowania konwoju firmowego. Wystarczy się zgłosić do <@&${zarzad}>\n**8.** Rangę <@&${pilot}> otrzymuje automatycznie każda osoba posiadająca rangę <@&${elitartny}> lub wyżej.\n**9.** Podczas obecności osoby z rangą <@&${pilot}>, wszyscy członkowie firmy są zobowiązani do słuchania jego poleceń dotyczących punktów trasy oraz ruchu drogowego\n**10.** Kierowca może poprosić osobę z rangą <@&${dyspozytor}> o zlecenie trasy w ETS 2 i ATS\n**11.** Kierowca ma prawo odrzucić trasę zleconą przez dyspozytora bez żadnych konsekwencji\n**12.** Kierowca ma prawo do wzięcia urlopu w dowolnym momencie na czas nieokreślony. W tym celu należy się skontaktować z <@&${BossId}>\n**13.** Nieusprawiedliwiony brak aktywności dłuższy niż 3 miesiące skutkuje wydaleniem z firmy`},
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Regulamin Dyspozytora', value: '**1.** Dyspozytor może zlecić na raz maksymalnie 4 trasy jednej osobie\n**2.** Dyspozytor nie powinien zlecać za długich tras\n**3.** Dyspozytor może zostać poproszony o zlecenie trasy przez kierowcę. Wtedy jest on zobowiązany do stworzenia zlecenia, o ile jest to zgodne z regulaminem\n**4.** Dyspozytor jest zobowiązany do usuwania nieakceptowanych zleceń starszych niż 24h'},
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Regulamin Pilota', value: `**1.** Rangę <@&${pilot}> otrzymuje automatycznie każda osoba posiadająca rangę <@&${elitartny}> lub wyżej. \n**2.** Pilot ma obowiązek poruszać się pojazdem dostosowanym do wykonywanej przez niego pracy. **(Skoda w malowaniu PILOT oraz żółte sygnały świetlne)**\n**3.** Pilot dba o bezpieczeństwo konwoju podczas przejazdu między Punktem Startowym, a Punktem Docelowym\n**4.** Pilot wyznacza prędkość konwoju, trasę oraz ilość i miejsca postojów\n**5.** Pilot ma obowiązek pilnowania porządku w konwoju. Przerwa między kolejnymi pojazdami nie może być za duża`},
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Malowanie Firmowe', value: `**1.** Każdy kierowca jest zobowiązany do używania malowania firmowego podczas jazdy w trybie multiplayer\n**2.** Malowanie ma nazwę **SADE** i składa się z trzech odpowiednich kolorów\n**3.** Malowanie firmowe nie obowiązuje w grze <@&${Ats}> oraz w ciężarówkach z 4-osiowym zawieszeniem\n**4.** Instrukcja ustawień malowania jest dostępna na kanale ${client.channels.cache.get(target_malowanie).toString()}`}, //odnośnik do kanału malowanie
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Rangi', value: 'Liczone na podstawie całkowitego przejechanego dystansu w firmie'},
                        {name: '\u200B', value: `<@&${mistrz}>\n<@&${_10M_plus}>\n\n<@&${legenda}>\n<@&${_10M}>\n\n<@&${król}>\n<@&${_4M}>\n\n<@&${elitartny}>\n<@&${_1M}>\n\n<@&${zawodowy_kierowca}>\n<@&${_350}>\n\n<@&${kierowca__}>\n<@&${_75}>\n\n<@&${początkujący}>\n<@&${_20}>\n\n<@&${rekrut}>\n<@&${_5}>`},
                        {name: '\u200B', value: '\u200B'},
                        {name: 'Postanowienia Końcowe', value: 'Zarząd firmy zastrzega sobie prawo do zmiany regulaminu bez podania przyczyny.\n\nRegulamin jest własnością firmy **HalkoTrans Logistic**.\n**ROZPOWSZECHNIANIE LUB KOPIOWANIE BEZ ZGODY ZARZĄDU FIRMY JEST ZABRONIONE**'}
                        )
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                message[1].edit(embed)
            }
        }
    })
}