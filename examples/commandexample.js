module.exports = {
    name: 'mycommand',
    run: ({ bot, message }) => {
        message.channel.send('Hello World!')
    }
}