let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupRemove(m.chat, [who || m.quoted.sender])
}
handler.help = ['okick @tag atau reply chat']
handler.tags = ['admin']
handler.command = /^(okick|rk|k|\-)$/i

handler.group = true
handler.botAdmin = true
handler.owner = true

handler.limit = false

module.exports = handler

