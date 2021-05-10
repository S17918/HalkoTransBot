module.exports = (message) =>{
    if(message.member.hasPermission('ADMINISTRATOR')){
        message.channel.messages.fetch().then(results => {
            message.channel.bulkDelete(results)
        })
    }else{
        message.delete({timeout: 2000})
        message.channel.send('You cannot do that !').then(msg => {
            msg.delete({timeout: 4000})
        })
    }
}