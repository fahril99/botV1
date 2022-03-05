let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
	let nani = 'https://telegra.ph/file/e2a9c1963a04a2f6f3c02.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `SILAHKAN PILIH MODE DI BAWAH INI`, '© fahril', 'SELF', '.off public', `PUBLIC`, `.on public`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.help = ['set']
handler.tags = ['owner']
handler.command = /^(set|mode)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)