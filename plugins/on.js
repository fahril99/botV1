let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing)
	global.DATABASE.data.chats[m.chat].banned = false
	conn.reply(m.chat, `BOT Berhasil *DI AKTIFKAN* Di Grup Ini !`, m)
}
handler.help = ['onn']
handler.tags = ['owner']
handler.command = /^onn$/i
handler.owner = true
module.exports = handler
