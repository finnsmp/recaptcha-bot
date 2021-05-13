const Discord = require('discord.js');
const pool = require('./pool');
const client = new Discord.Client();
const {
    discord_guild_id,
    discord_bot_token,
    discord_verified_role,
    domain
} = require('./variables')
client.on('ready', () => {
    console.log('[Discord] Bot started.')
    client.user.setActivity('v!help', { type: 'WATCHING' });
})
client.on('guildMemberAdd', member => {
    const linkId = pool.createLink(member.id);
    member.send(`Here is your REcaptcha verification link: ${domain == '' ? 'localhost:8080' : domain}/verify/${linkId}\n\nIt expires in 15 minutes!\nHaving trouble? Messsge an admin.\nIf the link is invalid or expired, leave and rejoin the server.`)
        client.channels.cache.get('841800882038636555').send('<@'+member.tag+'>, I am sending you a DM with a link. Click it to get verified.\nIf you have disabled DM\'s or blocked the bot, please allow DM messages and unblock the bot. (Type !dm)').then(msg => {
    msg.delete({ timeout: 100000 })
})
})
client.on('message', message => {
  if (message.channel.id !== '841800882038636555') return
  if (message.author.bot) return
  if (message.author.id === client.user.id) return
  if (message.member.hasPermission('ADMINISTRATOR')) return

  if (message.content === 'v!help') {
    mesage.author.send('**Commands:**\nv!help - displays command list\nv!dm - displays DM enabling instructions\nv!verify - sends a new captcha to you')
    mesage.channel.send('You\'ve got mail!')
  }
  if (message.content === 'v!captcha' || message.content === 'v!recaptcha' || message.content === 'v!verify' && message.channel.type !== 'dm') {
    message.delete()
    const member = message.member
        const linkId = pool.createLink(member.id);
    member.send(`Here is your REcaptcha verification link: ${domain == '' ? 'localhost:8080' : domain}/verify/${linkId}\n\nIt expires in 15 minutes!\nHaving trouble? Messsge an admin.\nIf the link is invalid or expired, Type !verify .`)
        client.channels.cache.get('841800882038636555').send('<@'+member.user.id+'>, I am sending you a DM with a verification link. Please allow DM\'s and make sure the bot is not blocked. (type !dm for a tutorial)').then(msg => {
    msg.delete({ timeout: 100000 })
})
  }
  if (message.content === 'v!dm') {
    message.delete()
    message.channel.send('Here is how to allow server DMs!\nhttps://i.imgur.com/EfOiMPv.gif\nOnce complete, type !verify to get a new captcha!').then(msg => {
    msg.delete({ timeout: 100000 })
})
  }
})
function main() {
    client.login(discord_bot_token).catch(e => {
        console.log('[Discord] Invalid bot token!');
        process.exit(0)
    })
}
async function addRole(discordId) {
    try {
        var guild = await client.guilds.fetch(discord_guild_id);
        var member = await guild.members.fetch(discordId);
        var role = await guild.roles.cache.find(r => r.name === discord_verified_role);
        member.roles.add(role)
        console.log(`Added roles to user ${discordId}.`)
        member.send('You are verified and have the Member role.')
    } catch (e) {
        console.log(`Error adding role to user ${discordId}.`);
    }
}
module.exports = {
    run: main,
    addRole
};
