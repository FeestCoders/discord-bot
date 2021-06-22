let ms = require('ms')

module.exports = {
    name: 'ready',
    run: async bot => {
        console.log(`${bot.user.tag} mode activated!!`)
            bot.user.setActivity(`${bot.users.cache.size} Users`, { type: 'WATCHING' })
        if (!bot.production) return
        bot.invites = await bot.guild.fetchInvites()
    }
}