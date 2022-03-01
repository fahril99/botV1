// Magernulis By MFarelS:V
// Code by DrawlNag
// Recode by fahril :V
let handler  = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY'), 'nulis.jpg', 'Nahhh sudah jadi...', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['nulis']

handler.command = /^nulis[1-6]?$/i

handler.limit = false

module.exports = handler
