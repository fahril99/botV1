let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} kallo mau sc hub owner cuma 20k no pasaran\n\n note : setelah membeli sc di harapkan mengetahui tutor pemasangan sc sendiri tutorial ada di youtube nurutomo! jika masih nanya gimana tutor pasang sc nya akan di block oleh owner karena owner itu banyak kerjaan
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler


//yang lagi nyari by *fahril* nya 🗿🗿