require('dotenv').config()
require('module-alias/register')

let fs = require('fs')
let discord = require('discord.js')

let bot = new discord.Client({
    ws: {
        intents: discord.Intents.ALL
    },
    partials: ['MESSAGE', 'CHANNEL']
})

bot.invites = {}
bot.commands = new discord.Collection()

fs.readdirSync('commands').forEach(file => {
    let command = require(`@commands/${file}`)
    bot.commands.set(command.name, command)
})

fs.readdirSync('events').forEach(file => {
    let event = require(`@events/${file}`)
    bot.on(event.name, event.run.bind(null, bot))
})

bot.login(process.env.TOKEN)

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)