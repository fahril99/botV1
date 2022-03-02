let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let handler  = async (m, { conn, text }) => {
	let nani = 'https://telegra.ph/file/2f7720ca4aada8c08c753.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `*asal bot*\n\nasal bot ini di kisahkan dari 5 th yang lalu yaitu tahun 2018 saat itu corona belum melanda seluruh dunia, saat itu owner bot tidak sengaja tertarik untuk memahami pemograman database yang berasal dari bot whatsapp dan saat itu lah owner bot membuat suatu progam database yang dinamakan _fahrilbotz_ yang mana itu adalah nama dari owner nya sendiri *fahril* sebelum nya fahrilbotz hanya menggunakan baileys biasa dan saat seiring perkembangan zaman _fahrilbotz_ mengikuti juga perkembangan baileys yang dimana baileys telah rilis multi device/program beta yang di rancang oleh adiwajshing yang berasal dari india dan pada tahun 2021 release _fahrilbotz_ *_multi device_* atau program beta\n\nprogram beta yakni program yang me riliskan terlebih dahulu baileys versi terbaru sehingga baileys tersebut lebih modern/gg daripada baileys biasa tapi ada juga resikonya yakni ke eror an fiture karena telah terup lebih dahulu tanpa pengecekan yang natural/secara teliti dan diharapkan untuk user yang memakai bot bila menemukan fiture eror bisa menggunakan fitur yang tersedia yakni /report atau juga bisa langsung menghubungi owner bot wa `, `© fahril` , 'menu', '.menu', `owner`, `.owner`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.command = /^(asalbot)$/
handler.help = ['asalbot']
handler.tags = ['info']

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
